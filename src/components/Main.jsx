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
        "Australia": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png.transform/3col/image.png",
        "Japan": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Japan%20carbon.png.transform/3col/image.png",
        "China": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/China%20carbon.png.transform/3col/image.png",
        "United States": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png.transform/5col/image.png",
        "Italy": "https://media.formula1.com/image/upload/f_auto/q_auto/v1684338005/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Emilia%20Romagna%20carbon.png.transform/5col/image.png",
        "Monaco": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/5col/image.png",
        "Canada": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png.transform/5col/image.png",
        "Spain": "https://media.formula1.com/image/upload/f_auto/q_auto/v1680529432/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/5col/image.png",
        "Austria": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/5col/image.png",
        "Great Britain": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Great%20Britain%20carbon.png.transform/5col/image.png",
        "Hungary": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Hungar%20carbon.png.transform/5col/image.png",
        "Belgium": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/5col/image.png",
        "Netherlands": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245033/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Netherlands%20carbon.png.transform/5col/image.png",
        "Italy": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Italy%20carbon.png.transform/5col/image.png",
        "Azerbaijan": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/5col/image.png",
        "Singapore": "https://media.formula1.com/image/upload/f_auto/q_auto/v1683639275/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Singapore%20carbon.png.transform/5col/image.png",
        "United States": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/USA%20carbon.png.transform/5col/image.png",
        "Mexico": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png.transform/5col/image.png",
        "Brazil": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Brazil%20carbon.png.transform/5col/image.png",
        "United States": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677249931/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Las%20Vegas%20carbon.png.transform/5col/image.png",
        "Qatar": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245031/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Qatar%20carbon.png.transform/5col/image.png",
        "Abu Dhabi": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Abu%20Dhab%20carbon.png.transform/5col/image.png"
    }

    const countryFlags = {
        "Bahrain": "https://flagcdn.com/bh.svg",
        "Saudi Arabia": "https://flagcdn.com/sa.svg",
        "Australia": "https://flagcdn.com/au.svg",
        "Japan": "https://flagcdn.com/jp.svg",
        "China": "https://flagcdn.com/cn.svg",
        "United States": "https://flagcdn.com/us.svg",
        "Italy": "https://flagcdn.com/it.svg",
        "Monaco": "https://flagcdn.com/mc.svg",
        "Canada": "https://flagcdn.com/ca.svg",
        "Spain": "https://flagcdn.com/es.svg",
        "Austria": "https://flagcdn.com/at.svg",
        "Great Britain": "https://flagcdn.com/gb.svg",
        "Hungary": "https://flagcdn.com/hu.svg",
        "Belgium": "https://flagcdn.com/be.svg",
        "Netherlands": "https://flagcdn.com/nl.svg",
        "Azerbaijan": "https://flagcdn.com/az.svg",
        "Singapore": "https://flagcdn.com/sg.svg",
        "Mexico": "https://flagcdn.com/mx.svg",
        "Brazil": "https://flagcdn.com/au.svg",
        "Qatar": "https://flagcdn.com/qa.svg",
        "Abu Dhabi": "https://flagcdn.com/ae.svg"
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
