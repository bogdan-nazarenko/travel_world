import { Suspense, lazy, useEffect, useLayoutEffect, useRef } from "react";
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
        if (window.pageYOffset > 0 && hash === "") {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    useLayoutEffect(() => {
        const isSmoothScroll: boolean =
            document.documentElement.hasAttribute("style");

        if (hash !== "" && !isSmoothScroll) {
            document.documentElement.style.scrollBehavior = "smooth";
        } else if (hash === "" && isSmoothScroll) {
            document.documentElement.removeAttribute("style");
        }
    }, [hash]);

    const hashOnLoad = useRef<string>(hash);

    useEffect(() => {
        if (hashOnLoad.current !== "") {
            const watcher = new MutationObserver((): void => {
                const idElement: Element | null = document.querySelector(
                    hashOnLoad.current
                );

                if (idElement) {
                    idElement.scrollIntoView();
                    watcher.disconnect();
                }
            });

            watcher.observe(document.body, { childList: true, subtree: true });

            return () => watcher.disconnect();
        }
    }, []);

    useEffect(() => {
        if (hash !== "") {
            document.querySelector(hash)?.scrollIntoView();
        }
    }, [hash]);

    const isMainPath: boolean = Object.values(main).includes(pathname);

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

                    {isMainPath && <Newsletter />}
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
