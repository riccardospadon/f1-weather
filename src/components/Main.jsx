import { useEffect, useState } from "react"
import MyNavBar from "./MyNavBar"
import { Container, Row } from "react-bootstrap"
import CircuitCard from "./CircuitCard"

export default function Main() {
    const [circuits, setCircuits] = useState([])
    const [sortedCircuits, setSortedCircuits] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        fetch("https://api.openf1.org/v1/meetings?year=2024", {})
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCircuits(data)
                setSortedCircuits(data)
            })
            .catch((error) => console.error("Error fetching circuits!", error))
    }, [])

    const circuitLayouts = {
        "Bahrain": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/3col/image.png",
        "Saudi Arabia": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia%20carbon.png.transform/3col/image.png",

    }

    const countryFlags = {
        "Bahrain": "https://flagcdn.com/bh.svg",
        "Saudi Arabia": "https://flagcdn.com/sa.svg"
    }

    return (
        <>
            <MyNavBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                circuits={circuits}
                setSortedCircuits={setSortedCircuits}
            />
            <Container>
                <h1>⛅ Look the weather for your favourite Grand Prix! 🏁</h1>
                <Row className="mt-5">
                    {sortedCircuits.map((circuit, i) =>(
                        <CircuitCard circuit={circuit} layout={circuitLayouts[circuit.country_name]} flag={countryFlags[circuit.country_name]} key={i} />
                    ))}
                </Row>
            </Container>
        </>
    )
}
