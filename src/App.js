import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SingleCircuit from "./components/SingleCircuit"
import NavNoSearch from "./components/NavNoSearch"
import { PrimeReactProvider } from 'primereact/api'

function App() {
    return (
        <PrimeReactProvider>
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
                                <NavNoSearch />
                                <SingleCircuit />
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </div>
        </PrimeReactProvider>
    )
}

export default App
