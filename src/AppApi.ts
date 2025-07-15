import { notification } from "antd";
import { Api } from "./Api";


export const appApi = new Api({ baseURL: import.meta.env.VITE_API });

appApi.instance.interceptors.request.use(async (config) => {
    const { store } = await import("./store");
    const token = store.getState().auth.token;
    if (token) {
        config.headers["authorize"] = `Bearer ${token}`
    }
    return config;
});

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