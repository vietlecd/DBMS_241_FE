const apiKey = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = apiKey || `http://localhost:8080/api/`;

const API_URLS = {
    // ----------------- Add the AUTH URLs ----------------- //
    LOGIN: `${BASE_URL}users/login`,
    REGISTER: `${BASE_URL}users/register`,
    // ----------------------------------------------------- //

    // ----------------- Add the BOOKS URLs ----------------- //
    GET_BOOKS_AUTHOR: `${BASE_URL}bookByAuthor`,
    GET_BOOKS_BOUGHT: `${BASE_URL}findBookBought`,
    GET_BOOKS_CATEGORY: `${BASE_URL}bookByCategory`,
    CREATE_BOOK: `${BASE_URL}createBook`,
    GET_BOOKS_WRITTEN: `${BASE_URL}findBookWritten`,
    GET_BOOKS_LIST: `${BASE_URL}list/get`,
    // ----------------------------------------------------- //

    // ----------------- Add the PAYMENT ----------------- //
    CREATE_PAYMENT: `${BASE_URL}submitOrder`,
    GET_PAYMENT_HISTORY: `${BASE_URL}payments`,
    PAY_BOOK: `${BASE_URL}payment/create`,
    GET_PAY_BOOK: `${BASE_URL}payment/get`,
    // ----------------------------------------------------- //

    // ----------------- Add the USER URLs ----------------- //
    GET_USER_INFO: `${BASE_URL}users`,
    UPDATE_USER_INFO: `${BASE_URL}users/update`,
    GET_USER_POINTS: `${BASE_URL}users/countPoint`,
    // ----------------------------------------------------- //

    // ----------------- Add the FAVOURITE API URLs ----------------- //
    ADD_FAVORITE_BOOK: `${BASE_URL}list/add`,
    REMOVE_FAVORITE_BOOK: `${BASE_URL}list/remove`,
    GET_FAVORITE_BOOKS: `${BASE_URL}list/get`,
    // ---------------------------------------------------------------- //

    // ----------------- Add the ADVERTISEMENT API URLs ----------------- //
    GET_ADVERTISEMENTS: `${BASE_URL}view_advertisement`,
    // ---------------------------------------------------------------- //
};

export default API_URLS;