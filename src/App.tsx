import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./components/pages/Home.tsx";
import About from "./components/pages/About.tsx";
import Tours from "./components/pages/Tours.tsx";
import Login from "./components/pages/Login.tsx";
import Register from "./components/pages/Register.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import Newsletter from "./components/blocks/Newsletter.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
    const location = useLocation();

    const isMainPath: boolean = ["/", "/about", "/tours"].includes(
        location.pathname
    );

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

                {isMainPath && <Newsletter />}
            </main>
            <Footer />
        </>
    );
};

export default App;
