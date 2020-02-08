const url = "http://open.duyiedu.com";
const appkey = "1209899252ze_1554110339699";
export default async function findAllStudents() {
    return await fetch(url + "/api/student/findAll/?appkey=" + appkey).then(res => res.json()).then(res => res.data);
}