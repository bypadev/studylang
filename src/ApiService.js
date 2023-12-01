import axios from 'axios';
let BASE_URL = 'http://rentngo.az/api';

export default {
    logIn(data) {
        const url = `${BASE_URL}/User`;
        return axios.post(url, data);
    },
    uploadExcel(data, loginType) {
        const url = `${BASE_URL}/University/upload`;
        return axios.post(url, data);
    },
    sendMail(data) {
        const url = `${BASE_URL}/Student/sendMail`;
        return axios.post(url, data);
    },
    uploadUniversityImage(data){
        const url = `${BASE_URL}/University/upload/img`;
        return axios.get(url, data);
    },
    getUniversities(data) {
        const url = `${BASE_URL}/University`;
        return axios.post(url, data);
    }
}

axios.interceptors.request.use(
    config => {
        let accessToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaSBNYW1lZG92IiwiaWF0IjoxNTE2MjM5MDIyfQ.254X05pZHjBZuBrsalkYI_ARjSlZA1Cc2CR_mSOUh40"
        if (accessToken) {
            config.headers = Object.assign({
                Authorization: accessToken,
                "x-app-header": "StudyLang",
            }, config.headers);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) => response, (error) => {
    throw error;
});
