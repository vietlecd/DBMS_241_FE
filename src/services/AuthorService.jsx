import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const get_author_info = async () => {
    return api_fetch(api_urls.GET_AUTHOR_INFO, {
        method: 'GET',
    });
};

export const become_author = async (data) => {
    return api_fetch(api_urls.BECOME_AUTHOR, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}; 

export const get_author = async () => {
    return api_fetch(api_urls.GET_AUTHOR, {
        method: 'GET',
    });
}