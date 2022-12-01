import moment from 'moment';
import { getTaskListApi, updateTaskApi } from './bpjs-api.js';


const bookingCodes = ['F94ICt'];

(async function rePushTask() {

    const resp = await getTaskListApi(bookingCodes[0])
    let list = [...resp.response.list]
    let taskIds = [1,2,3,4,5,6,7];
    
    list.forEach(ls => {
        if(taskIds.includes(ls.taskid)) {
            taskIds = taskIds.filter(ts => ts !== ls.taskid)
        }
    });
    
    taskIds.map(async taskid => {
        let waktu = moment().unix();
        if(taskid > 1) {
            const prevTask = list.find(ls => ls.taskid === (taskid - 1));
            if(prevTask) {
                waktu = moment(prevTask.waktu, 'DD-MM-YYYY hh:mm:ss').add(5, 'minutes').unix();
            }
          
        }
        const payload = {
            kodebooking: bookingCodes[0],
            taskid,
            waktu,
        }
        
        list.push({
            ...payload,
            waktu: moment.unix(waktu).format('DD-MM-YYYY hh:mm:ss')
        });
        console.log('ku', payload ,list)
        await updateTaskApi(payload);
    })

})()