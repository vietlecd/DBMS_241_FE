import api_urls from "../configs/Api";

const api_fetch = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers,
    };

    try {
        const response = await fetch(url, { ...options, headers });

        console.log(response);

        if (!response.ok) {
            const contentType = response.headers.get('content-type');
            const errorData = contentType && contentType.includes('application/json')
                ? await response.json()
                : await response.text();
            throw new Error(errorData.message || errorData || 'Request Failed');
        }

        const contentType = response.headers.get('content-type');
        const responseData = contentType && contentType.includes('application/json')
            ? await response.json()
            : await response.text();

        console.log(responseData);

        return responseData;
    } catch (error) {
        throw error;
    }
};

export default api_fetch;
