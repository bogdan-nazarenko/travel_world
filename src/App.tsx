import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./components/pages/Home.tsx";
import About from "./components/pages/About.tsx";
import Tours from "./components/pages/Tours.tsx";
import Login from "./components/pages/Login.tsx";
import Register from "./components/pages/Register.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/tours" element={<Tours />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </main>
            <Footer />
        </>
    );
};

export default App;
