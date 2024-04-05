import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./style.module.scss"
import cn from "classnames"

export default function SingleCircuit() {
    const { id } = useParams()
    const [circuit, setCircuit] = useState([])
    const [openMeteoData, setOpenMeteoData] = useState({})

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
        Barhain: {
            latitude: 26.0348,
            longitude: 50.5245,
            start_date: "2024-02-29",
            end_date: "2024-02-29",
            daily: "weather_code",
        },

        "Saudi Arabia": {
            latitude: 21.4901,
            longitude: 39.1862,
            start_date: "2024-03-07",
            end_date: "2024-03-07",
            daily: "weather_code",
        },

        Australia: {
            latitude: -37.814,
            longitude: 144.9633,
            start_date: "2024-03-22",
            end_date: "2024-03-22",
            daily: "weather_code",
        },

        Japan: {
            latitude: 34.8833,
            longitude: 138.5833,
            start_date: "2024-04-05",
            end_date: "2024-04-05",
            daily: "weather_code",
        },

        China: {
            latitude: 31.2222,
            longitude: 121.4581,
            start_date: "2024-04-19",
            end_date: "2024-02-29",
            daily: "weather_code",
        },

        "United States": {
            latitude: 25.7743,
            longitude: -80.1937,
            start_date: "2024-05-03",
            end_date: "2024-05-03",
            daily: "weather_code",
        },

        Italy: {
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

        Canada: {
            latitude: 45.5088,
            longitude: -73.5878,
            start_date: "2024-06-07",
            end_date: "2024-06-07",
            daily: "weather_code",
        },

        Spain: {
            latitude: 41.55,
            longitude: 2.2419,
            start_date: "2024-06-21",
            end_date: "2024-06-21",
            daily: "weather_code",
        },

        Austria: {
            latitude: 48.2333,
            longitude: 15.35,
            start_date: "2024-06-28",
            end_date: "2024-06-28",
            daily: "weather_code",
        },

        "Great Britain": {
            latitude: 52.0706,
            longitude: -1.0122,
            start_date: "2024-07-05",
            end_date: "2024-07-05",
            daily: "weather_code",
        },

        Hungary: {
            latitude: 47.4984,
            longitude: 19.0404,
            start_date: "2024-07-19",
            end_date: "2024-07-19",
            daily: "weather_code",
        },

        Belgium: {
            latitude: 50.4838,
            longitude: 5.8667,
            start_date: "2024-07-26",
            end_date: "2024-07-26",
            daily: "weather_code",
        },

        Netherlands: {
            latitude: 52.3713,
            longitude: 4.5331,
            start_date: "2024-08-23",
            end_date: "2024-08-23",
            daily: "weather_code",
        },

        Italy: {
            latitude: 45.58,
            longitude: 9.2725,
            start_date: "2024-08-30",
            end_date: "2024-08-30",
            daily: "weather_code",
        },

        Azerbaijan: {
            latitude: 40.3777,
            longitude: 49.892,
            start_date: "2024-09-13",
            end_date: "2024-09-13",
            daily: "weather_code",
        },

        Singapore: {
            latitude: 1.2897,
            longitude: 103.8501,
            start_date: "2024-09-20",
            end_date: "2024-09-20",
            daily: "weather_code",
        },

        "United States": {
            latitude: 30.2672,
            longitude: -97.7431,
            start_date: "2024-10-18",
            end_date: "2024-10-18",
            daily: "weather_code",
        },

        Mexico: {
            "latitude": 19.4285,
            "longitude": -99.1277,
            "start_date": "2024-10-25",
            "end_date": "2024-10-25",
            "daily": ["weather_code"]
        },

        Brazil: {
            "latitude": -23.5475,
            "longitude": -46.6361,
            "start_date": "2024-11-01",
            "end_date": "2024-11-01",
            "daily": ["weather_code"]
        },

        "United States": {
            "latitude": 36.175,
            "longitude": -115.1372,
            "start_date": "2024-11-21",
            "end_date": "2024-11-21",
            "daily": ["weather_code"]
        },

        Qatar: {
            "latitude": 25.5,
            "longitude": 51.25,
            "start_date": "2024-11-29",
            "end_date": "2024-11-29",
            "daily": ["weather_code"]
        },

        "Abu Dhabi": {
            "latitude": 24.4978,
            "longitude": 54.6056,
            "start_date": "2024-12-06",
            "end_date": "2024-12-06",
            "daily": ["weather_code"]
        },
    }

    // TODO: create a function that match the date from F1 API with the OPENMETEO ones...

    useEffect(() => {
        // fetch f1 API
        fetch(
            `https://api.openf1.org/v1/meetings?year=2024&circuit_key=${id}`,
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
            
        }
    }, [id])

    // TODO: create a function that automatically see the location (maybe feel like into the main with flags and name countries) and return the right country and the weather too.

    // TODO: create a function that automatically see the weather and return the right tyres that were used/using in the current GP

    // TODO: create a function that I can navigate through the circuits (previous and next)

    // TODO: create the layout of the page
    return <Container></Container>
}
