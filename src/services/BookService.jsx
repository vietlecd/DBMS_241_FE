import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const get_books_by_author = async (authorName) => {
    return api_fetch(`${api_urls.GET_BOOKS_AUTHOR}?authorName=${encondeURIComponent(authorName)}`, {
        method: 'GET',
    });
};

export const get_books_bought = async () => {
    return api_fetch(api_urls.GET_BOOKS_BOUGHT, {
        method: 'GET',
    });
};

export const get_books_by_category = async (category) => {
    return api_fetch(`${api_urls.GET_BOOKS_CATEGORY}?params=${encodeURIComponent(category)}`, {
        method: 'GET',
    });
};

export const create_book = async (data) => {
    return api_fetch(api_urls.CREATE_BOOK, {
        method: 'POST',
        body: JSON.stringify(data),
    });
};

export const get_books_written = async () => {
    return api_fetch(api_urls.GET_BOOKS_WRITTEN, {
        method: 'GET',
    });
};

export const get_books_list = async () => {
    return api_fetch(api_urls.GET_BOOKS_LIST, {
        method: 'GET',
    });
};