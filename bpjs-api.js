import axios from 'axios';

const TOKEN_SHMK = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsSWQiOiIxNSIsInVzZXJuYW1lIjoiYnBqcy5zaG1rIiwiaG9zcGl0YWxJZCI6IjI1M2M1MjlhLWQ0YWEtNDc3ZC04MWY5LTI3ZmVlNmIwNGQ1YyIsImFwaUtleSI6IlYpazZWcXNGb0dcXD98R0ZYcV1fSzFxPltXZDEmUGwiLCJpYXQiOjE2NzAzMDI0Mjl9.i8StB43fEp0VCK9HXPcBDC0tJ8-iM9Fyr1wj8iIICt0`;
const TOKEN_SHYG = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsSWQiOiIxNSIsInVzZXJuYW1lIjoiYnBqcy5zaHlnIiwiaG9zcGl0YWxJZCI6IjhjMDk5MDhhLTJlYjMtNGU1ZS1hN2QzLWFiMjQwMGRmMGI4MiIsImFwaUtleSI6IlYpazZWcXNGb0dcXD98R0ZYcV1fSzFxPltXZDEmUGwiLCJpYXQiOjE2Njk0NTU0MjV9.QArlYpr77nsMYmvvyWkp7TkV3VNvBqJ2jDx6golZKno`

const headers = {
    'x-token': TOKEN_SHMK,
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