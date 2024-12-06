import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const login = async (data) => {
    return api_fetch(api_urls.LOGIN, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const register = async (data) => {
    return api_fetch(api_urls.REGISTER, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};