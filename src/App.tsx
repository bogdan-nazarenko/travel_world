import reactLogo from "./assets/media/images/react.svg";
import "./styles/App.scss";

function App() {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="hero">
                            <img src={reactLogo} alt="React" />
                            <h1>React + Vite + SCSS + TS</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
