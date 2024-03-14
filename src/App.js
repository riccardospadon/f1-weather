import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SingleCircuit from "./components/SingleCircuit"

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Route for the home page */}
                <Route
                    path="/"
                    element={
                        <>
                            <Main />
                            <Footer />
                        </>
                    }
                />

                {/* Route for a single circuit */}
                <Route
                    path="/circuit/:id"
                    element={
                        <>
                            <SingleCircuit />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
