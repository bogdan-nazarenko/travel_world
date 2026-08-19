import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Header from "@markup/layout/Header";
import Loading from "@markup/components/Loading";
const Home = lazy(() => import("@markup/pages/Home"));
import Footer from "@markup/layout/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
