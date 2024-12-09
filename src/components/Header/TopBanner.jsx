function TopBanner() {
    return (
        <div className="bg-gray-800 text-white text-center p-2 fixed top-0 left-0 w-full z-50">
            <p className="inline m-0">GET DEALS ON BOOKS! FLAT 50% OFF ON ALL BOOKS</p>
            <a href="/" className="font-bold ml-2 underline cursor-pointer text-red-500">
                Shop Now
            </a>
        </div>
    )
}

export default TopBanner