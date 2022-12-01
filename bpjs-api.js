import axios from 'axios';

const headers = {
    'x-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsSWQiOiIxNSIsInVzZXJuYW1lIjoiYnBqcy5zaHlnIiwiaG9zcGl0YWxJZCI6IjhjMDk5MDhhLTJlYjMtNGU1ZS1hN2QzLWFiMjQwMGRmMGI4MiIsImFwaUtleSI6IlYpazZWcXNGb0dcXD98R0ZYcV1fSzFxPltXZDEmUGwiLCJpYXQiOjE2Njk0NTU0MjV9.QArlYpr77nsMYmvvyWkp7TkV3VNvBqJ2jDx6golZKno`,
    'Content-Type': 'application/json'
}

export const getTaskListApi = (bookingCode) => {
    return axios.post('https://mysiloam-api.siloamhospitals.com/api/v2/queues/bpjs/task-time-list', {
        kodebooking: bookingCode
    }, { headers }).then(res => res.data);
}

export const updateTaskApi = (payload) => {    
    return Promise.resolve('ok');
    // return axios.post('https://mysiloam-api.siloamhospitals.com/api/v2/queues/bpjs/update-queue', 
    // payload , { headers }).then(res => res.data);
}