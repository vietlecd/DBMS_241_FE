import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./components/HomePage";
import UserProfile from "./components/User/UserProfile/UserProfile";

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
        {/* <Route path="/account/orders" element={<UserProfile />} />
        <Route path="/account/support" element={<UserProfile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
