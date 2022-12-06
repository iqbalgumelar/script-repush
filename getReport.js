import data from './data.json';
import json2csv from "json2csv";
import fs from "fs";
import { getTaskListApi } from './bpjs-api.js';

const fields = ['Appintment ID', 'Booking Code', 'Time Task 1', 'Time Task 2', 'Time Task 3'
, 'Time Task 4', 'Time Task 5', 'Time Task 6', 'Time Task 7', 'Time Task 99'];

(async function getReport() {
    let values = []
    await Promise.all(data.map(async (appt, i) => {
        values[i] = {}
        values[i]['Appintment ID'] = appt.appointment_id;
        values[i]['Booking Code'] = appt.booking_code;
        console.log('[start]', appt.booking_code)
        try {
            const resp = await getTaskListApi(appt.booking_code);
            const list = resp.response && resp.response.list || [];
            list.forEach(ls => {
                values[i]['Time Task '+ ls.taskid] = ls.waktu;
            });
        }catch(er){
            console.log('[error]', appt.booking_code, er.message)
        }
        
    }));
    
    console.log('[start] create report')
    await createaReport(values);

})();

async function createaReport(data) {
    const csv = await json2csv.parseAsync(data, { fields });
    return new Promise(res => {
        fs.writeFile('report.csv', csv, function (err) {
            if (err) throw err;
            console.log('File Saved!')
            res()
        });
    })
}

