import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Book from "./components/Book";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="bg-black pb-10">
      <Header />
      <Banner />
      {/* Modal Login */}
      {isLogin && (
        <LoginModal
          onClose={() => setIsLogin(false)} 
          onSwitchToRegister={() => {
            setIsRegister(true); 
            setIsLogin(false);  
          }}
        />
      )}
      {/* Modal Register */}
      {isRegister && (
        <RegisterModal
          onClose={() => setIsRegister(false)} 
          onSwitchToLogin={() => {
            setIsLogin(true); 
            setIsRegister(false); 
          }}
        />
      )}
      <BookList title={"Sách Đề Cử"} />
      <BookList title={"Sách Miễn Phí"} />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
