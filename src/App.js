import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import Courses from "./pages/courses/Courses";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="courses" element={<Courses/>} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
