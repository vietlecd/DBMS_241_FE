import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/HomePage";
import UserProfile from "./components/User/UserProfile/UserProfile";
import VNPay from "./components/VNPay/index";
import Fail from "./components/VNPay/Fail/index";
import Success from "./components/VNPay/Success/index";
import AuthorProfile from "./components/Author/Profile";
import AuthorBook from "./components/Author/BookList";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* User Profile */}
        <Route path="/profile/*" element={<UserProfile />} />
        <Route path="/account/books" element={<UserProfile />} />
        
        {/* Payment routes */}
        <Route path="/payment" element={<VNPay />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/success" element={<Success />} />

        {/* Register Author */}
        <Route path="/author" element={<AuthorProfile />} />
        <Route path="/authorBook" element={<AuthorBook />} />
      </Routes>
    </Router>
  );
}

export default App;
