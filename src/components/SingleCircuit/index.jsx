import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from "./style.module.scss"
import cn from "classnames"

export default function SingleCircuit() {
    const { location } = useParams()
    const [circuit, setCircuit] = useState([])
    const [openMeteoData, setOpenMeteoData] = useState({})
    const navigate = useNavigate()

    // tyres images
    const tyres = {
        C1: "http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/white-parentesi.png", // hard tyre
        C2: "http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/yellow-parentesi.png", // medium tyre
        C3: "http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/red-parentesi.png", // soft tyre
        INTERMEDIATE:
            "https://d3nv2arudvw7ln.cloudfront.net/images/global/380/862/cinturato-green-intermediate-4505508953587.png",
        FULL_WET:
            "https://d3nv2arudvw7ln.cloudfront.net/images/global/968/233/cinturato-blue-wet-4505508953865.png",
    }

    // parameters for each location
    const paramsLocation = {
        Sakhir: {
            latitude: 26.0348,
            longitude: 50.5245,
            start_date: "2024-02-29",
            end_date: "2024-02-29",
            daily: "weather_code",
        },

        Jeddah: {
            latitude: 21.4901,
            longitude: 39.1862,
            start_date: "2024-03-07",
            end_date: "2024-03-07",
            daily: "weather_code",
        },

        Melbourne: {
            latitude: -37.814,
            longitude: 144.9633,
            start_date: "2024-03-22",
            end_date: "2024-03-22",
            daily: "weather_code",
        },

        Suzuka: {
            latitude: 34.8833,
            longitude: 138.5833,
            start_date: "2024-04-05",
            end_date: "2024-04-05",
            daily: "weather_code",
        },

        Shanghai: {
            latitude: 31.2222,
            longitude: 121.4581,
            start_date: "2024-04-19",
            end_date: "2024-02-29",
            daily: "weather_code",
        },

        Miami: {
            latitude: 25.7743,
            longitude: -80.1937,
            start_date: "2024-05-03",
            end_date: "2024-05-03",
            daily: "weather_code",
        },

        Imola: {
            latitude: 44.3592,
            longitude: 11.7132,
            start_date: "2024-05-17",
            end_date: "2024-05-17",
            daily: "weather_code",
        },

        Monaco: {
            latitude: 43.7398,
            longitude: 7.4273,
            start_date: "2024-05-24",
            end_date: "2024-05-24",
            daily: "weather_code",
        },

        Montréal: {
            latitude: 45.5088,
            longitude: -73.5878,
            start_date: "2024-06-07",
            end_date: "2024-06-07",
            daily: "weather_code",
        },

        Barcelona: {
            latitude: 41.55,
            longitude: 2.2419,
            start_date: "2024-06-21",
            end_date: "2024-06-21",
            daily: "weather_code",
        },

        Spielberg: {
            latitude: 48.2333,
            longitude: 15.35,
            start_date: "2024-06-28",
            end_date: "2024-06-28",
            daily: "weather_code",
        },

        Silverstone: {
            latitude: 52.0706,
            longitude: -1.0122,
            start_date: "2024-07-05",
            end_date: "2024-07-05",
            daily: "weather_code",
        },

        Budapest: {
            latitude: 47.4984,
            longitude: 19.0404,
            start_date: "2024-07-19",
            end_date: "2024-07-19",
            daily: "weather_code",
        },

        "Spa-Francorchamps": {
            latitude: 50.4838,
            longitude: 5.8667,
            start_date: "2024-07-26",
            end_date: "2024-07-26",
            daily: "weather_code",
        },

        Zandvoort: {
            latitude: 52.3713,
            longitude: 4.5331,
            start_date: "2024-08-23",
            end_date: "2024-08-23",
            daily: "weather_code",
        },

        Monza: {
            latitude: 45.58,
            longitude: 9.2725,
            start_date: "2024-08-30",
            end_date: "2024-08-30",
            daily: "weather_code",
        },

        Baku: {
            latitude: 40.3777,
            longitude: 49.892,
            start_date: "2024-09-13",
            end_date: "2024-09-13",
            daily: "weather_code",
        },

        "Marina Bay": {
            latitude: 1.2897,
            longitude: 103.8501,
            start_date: "2024-09-20",
            end_date: "2024-09-20",
            daily: "weather_code",
        },

        Austin: {
            latitude: 30.2672,
            longitude: -97.7431,
            start_date: "2024-10-18",
            end_date: "2024-10-18",
            daily: "weather_code",
        },

        "Mexico City": {
            latitude: 19.4285,
            longitude: -99.1277,
            start_date: "2024-10-25",
            end_date: "2024-10-25",
            daily: "weather_code",
        },

        "São Paulo": {
            latitude: -23.5475,
            longitude: -46.6361,
            start_date: "2024-11-01",
            end_date: "2024-11-01",
            daily: "weather_code",
        },

        "United States": {
            latitude: 36.175,
            longitude: -115.1372,
            start_date: "2024-11-21",
            end_date: "2024-11-21",
            daily: "weather_code",
        },

        Lusail: {
            latitude: 25.5,
            longitude: 51.25,
            start_date: "2024-11-29",
            end_date: "2024-11-29",
            daily: "weather_code",
        },

        "Yas Island": {
            latitude: 24.4978,
            longitude: 54.6056,
            start_date: "2024-12-06",
            end_date: "2024-12-06",
            daily: "weather_code",
        },
    }

    // TODO: create a function that match the date from F1 API with the OPENMETEO ones...

    useEffect(() => {
        if(!location) return

        // Convert id in location
        if(!isNaN(location)){
            const foundLocation = Object.keys(paramsLocation).find(
                (key) => paramsLocation[key] === Number(location)
            )
            if(foundLocation){
                navigate(`/circuit/${foundLocation}`,  {replace: true })
            }
        }

        // fetch f1 API
        fetch(
            `https://api.openf1.org/v1/meetings?year=2024&circuit_key=${location}`,
            {}
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCircuit(data)
            })
            .catch((error) => console.error("Error fetching circuit!", error))

        // fetch openmeteo API
        const fetchOpenMeteoData = async () => {
            const params = paramsLocation[location] // id = location_key
            if (!params) return // Verify if params exist
            try {
                const url = `https://archive-api.openmeteo.com/v1/archive?latitude=${params.latitude}&longitude=${params.longitude}&start_date=${params.start_date}&end_date=${params.end_date}&daily=${params.daily}`
                const response = await fetch(url)
                const data = await response.json()
                setOpenMeteoData(data)
            } catch (error) {
                console.error("Error fetching OpenMeteo data", error)
            }
        }
        fetchOpenMeteoData()
    }, [location, navigate])

    // TODO: create a function that automatically see the location (maybe feel like into the main with flags and name countries) and return the right country and the weather too.
    // const getLocation = (id) => {
    //     return paramsLocation[id] ? id : "Unknown"
    // }

    // TODO: create a function that automatically see the weather and return the right tyres that were used/using in the current GP
    const getTyreByWeather = (weatherCode) => {
        switch (weatherCode) {
            case "rain":
                return tyres.FULL_WET
            case "intermediate":
                return tyres.INTERMEDIATE
            case "dry":
                return tyres.C3 // soft
            // TODO: tyres C1, C2 and C3 should appear all together in dry conditions
            default:
                return tyres.C1 // hard
        }
    }

    // TODO: create a function that I can navigate through the circuits (previous and next)
    const circuitIds = Object.keys(paramsLocation)
    const currentIndex = circuitIds.indexOf(location)
    const nextCircuit = circuitIds[currentIndex + 1] || circuitIds[0]
    const prevCircuit =
        circuitIds[currentIndex - 1] || circuitIds[circuitIds.length - 1]

    const navigateToCircuit = (circuitId) => {
        navigate(`/circuit/${circuitId}`)
    }

    // TODO: create the layout of the page
    return (
        <Container>
            {circuit.length > 0 && (
                <>
                
                </>
            )}
            <h1>{circuit.location}</h1>
            <Row>
                <Col>
                    <p>Location: {circuit.location}</p>
                    <p>Country: {circuit.location}</p>
                    <p>Paese: {location}</p>
                </Col>
                <Col>
                    <button onClick={() => navigateToCircuit(prevCircuit)}>
                        Prev
                    </button>
                    <button onClick={() => navigateToCircuit(nextCircuit)}>
                        Next
                    </button>
                </Col>
                <Col>
                    <img
                        src={getTyreByWeather(openMeteoData.weather_code)}
                        alt="Tyre"
                    />
                </Col>
            </Row>
        </Container>
    )
}
