import { lazy, Suspense } from "react";
import { useLocation, Routes, Route } from "react-router";
import { mainPaths } from "@data/paths";
import Header from "@ui/layout/Header";
import Loading from "@ui/components/Loading";
const Home = lazy(() => import("@ui/pages/Home"));
import Newsletter from "@ui/sections/Newsletter";
import Footer from "@ui/layout/Footer";

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
