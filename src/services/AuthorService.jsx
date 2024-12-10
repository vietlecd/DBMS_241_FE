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

export const count_book_written = async () => {
    return api_fetch(api_urls.COUNT_BOOKS_WRITTEN, {
export const count_follows = async () => {
    return api_fetch(api_urls.COUNT_FOLLOWS, {
        method: 'GET',
    });
}

export const count_recommend_books = async () => {
    return api_fetch(api_urls.COUNT_RECOMMEND_BOOKS, {
        method: 'GET',
    });
}