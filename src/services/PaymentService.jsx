import api_fetch from "./ApiService";
import api_urls from "../configs/Api";

export const create_payment = async (data) => {
    return api_fetch(`${api_urls.CREATE_PAYMENT}?amount=${encodeURIComponent(data)}`, {
        method: 'POST',
    });
};

export const get_payment_history = async () => {
    return api_fetch(api_urls.GET_PAYMENT_HISTORY, {
        method: 'GET',
    });
};

export const pay_book = async (data) => {
    return api_fetch(`${api_urls.PAY_BOOK}?bookId=${encodeURIComponent(data)}`, {
        method: 'POST',
    });
};

export const get_pay_book = async () => {
    return api_fetch(api_urls.GET_PAY_BOOK, {
        method: 'GET',
    });
};
