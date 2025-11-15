import { Suspense, lazy, useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { pages } from "./components/helpers/constants.ts";
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
    const location = useLocation();

    useEffect(() => {
        if (window.pageYOffset > 0 && location.hash === "") {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);

    useLayoutEffect(() => {
        const isSmoothScroll = document.documentElement.hasAttribute("style");

        if (location.hash !== "" && !isSmoothScroll) {
            document.documentElement.style.scrollBehavior = "smooth";
        } else if (location.hash === "" && isSmoothScroll) {
            document.documentElement.removeAttribute("style");
        }
    }, [location.hash]);

    const hashOnLoad = useRef<string>(location.hash);

    useEffect(() => {
        if (hashOnLoad.current !== "") {
            function scrollToElement(): void {
                const idElement = document.querySelector(hashOnLoad.current);

                if (idElement) {
                    idElement.scrollIntoView();
                    watcher.disconnect();
                }
            }

            const watcher = new MutationObserver(scrollToElement);
            watcher.observe(document.body, { childList: true, subtree: true });

            return () => watcher.disconnect();
        }
    }, []);

    const isMainPath: boolean = [pages.home, pages.about, pages.tours].includes(
        location.pathname
    );

    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path={pages.home} element={<Home />} />
                        <Route path={pages.about} element={<About />} />
                        <Route path={pages.tours} element={<Tours />} />
                        <Route path={pages.login} element={<Login />} />
                        <Route path={pages.register} element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                    {isMainPath && <Newsletter />}
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
