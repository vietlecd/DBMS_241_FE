import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const get_advertisements = async () => {
    return api_fetch(api_urls.GET_ADVERTISEMENTS, {
        method: 'GET',
    });
};

export const get_user_points = async () => {
    return api_fetch(api_urls.GET_USER_POINTS, {
        method: 'GET',
    });
}; 
