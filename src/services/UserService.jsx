import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const get_user_info = async () => {
    return api_fetch(api_urls.GET_USER_INFO, {
        method: 'GET',
    });
    
};

export const update_user_info = async (data) => {
    return api_fetch(api_urls.UPDATE_USER_INFO, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const get_user_points = async () => {
    return api_fetch(api_urls.GET_USER_POINTS, {
        method: 'GET',
    });
};
