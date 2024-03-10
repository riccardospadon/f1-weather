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
            .catch((error) => console.error("Errore fetching circuits!", error))
    }, [])

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
                        <CircuitCard circuit={circuit} key={i} />
                    ))}
                </Row>
            </Container>
        </>
    )
}
