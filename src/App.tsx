import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { main, auth } from "./components/helpers/constants.ts";
import Header from "./components/Header.tsx";
import Loading from "./components/elements/Loading.tsx";
const Home = lazy(() => import("./components/pages/Home.tsx"));
const About = lazy(() => import("./components/pages/About.tsx"));
const Tours = lazy(() => import("./components/pages/Tours.tsx"));
const Login = lazy(() => import("./components/pages/Login.tsx"));
const Register = lazy(() => import("./components/pages/Register.tsx"));
const NotFound = lazy(() => import("./components/pages/NotFound.tsx"));
const Newsletter = lazy(() => import("./components/blocks/Newsletter.tsx"));
import Footer from "./components/Footer.tsx";

const App = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (window.pageYOffset > 0) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    useEffect(() => {
        if (hash) {
            const scrollToId = setInterval(() => {
                const idElement: Element | null = document.querySelector(hash);

                if (idElement) {
                    idElement.scrollIntoView({ behavior: "smooth" });
                    clearInterval(scrollToId);
                }
            }, 100);

            return () => clearInterval(scrollToId);
        }
    }, [hash]);

    const isPathFromMain: boolean = Object.values(main).includes(pathname);

    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path={main.home} element={<Home />} />
                        <Route path={main.about} element={<About />} />
                        <Route path={main.tours} element={<Tours />} />
                        <Route path={auth.login} element={<Login />} />
                        <Route path={auth.register} element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    {isPathFromMain && <Newsletter />}
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
