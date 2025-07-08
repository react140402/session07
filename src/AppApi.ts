import { notification } from "antd";
import { Api } from "./Api";
import axios from 'axios'

export const appApi = new Api({ baseURL: "http://localhost:3010" });

appApi.instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        console.log(error);
        if (error.response?.data?.error) {
            notification.error({ message: error.response?.data?.error })
        } else {
            notification.error({ message: "خطا" });
        }
        return Promise.reject(error);
    }
);