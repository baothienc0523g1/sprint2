import axios from "axios";

const requestFilter = () => {
    axios.interceptors.request
        .use((request) => {
            const accessToken = localStorage.getItem("accessToken");
            if (accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`
                request.headers["Content-Type"] = "application/json"
            }
            return request;
        })
}

export {requestFilter};