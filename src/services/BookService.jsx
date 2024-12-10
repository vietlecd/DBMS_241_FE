import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const get_books_by_author = async (authorName) => {
    return api_fetch(`${api_urls.GET_BOOKS_AUTHOR}?authorName=${encondeURIComponent(authorName)}`, {
        method: 'GET',
    });
};

export const count_books_by_author = async (authorName) => {
    return api_fetch(`${api_urls.COUNT_BOOKS_BY_AUTHOR}`, {
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

export const create_book = async (formData) => {
    const token = localStorage.getItem('token'); 

    if (!token) {
        throw new Error('Authorization token is missing. Please log in again.');
    }

    try {
        const response = await fetch(api_urls.CREATE_BOOK, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, 
            },
            body: formData,
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Failed to create book: ${errorMessage}`);
        }

        alert('Book created successfully');
        return result;
    } catch (error) {
        console.error('Error while creating book:', error);
        throw error;
    }
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