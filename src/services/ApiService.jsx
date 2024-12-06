import api_urls from "../configs/Api";

const api_fetch = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers,
    };

    try {
        const response = await fetch(url, { ...options, headers });

        if (!response.ok) {
            // Đọc nội dung lỗi chỉ một lần
            const contentType = response.headers.get('content-type');
            const errorData = contentType && contentType.includes('application/json')
                ? await response.json()
                : await response.text();
            throw new Error(errorData.message || errorData || 'Request Failed');
        }

        // Đọc nội dung phản hồi thành công chỉ một lần
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
