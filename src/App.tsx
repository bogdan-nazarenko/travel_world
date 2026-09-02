import { lazy, Suspense } from "react";
import { useLocation, Routes, Route } from "react-router";
import { mainPaths } from "@data/paths";
import Header from "@markup/layout/Header";
import Loading from "@markup/components/Loading";
const Home = lazy(() => import("@markup/pages/Home"));
import Newsletter from "@markup/sections/Newsletter";
import Footer from "@markup/layout/Footer";

const App = () => {
    const { pathname } = useLocation();

    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>

                    {mainPaths.includes(pathname) && <Newsletter />}
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
