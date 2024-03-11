import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Main />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </div>
    )
}

export default App
