import { Container } from "react-bootstrap"
import styles from "./style.module.scss"
import cn from "classnames"

export default function SingleCircuit() {
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
            "latitude": 26.0348,
            "longitude": 50.5245,
            "start_date": "2024-02-29"
        },

        "Saudi Arabia": {
            "latitude": 21.4901,
            "longitude": 39.1862,
            "start_date": "2024-02-29"
        },


    }

    // TODO: create a function that match the date from F1 API with the OPENMETEO ones...
    
    useEffect(() => {
        // fetch f1 API
        fetch(`https://api.openf1.org/v1/meetings?year=2024&circuit_key=${id}`, {})
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setCircuit(data)
        })
        .catch((error) => console.error("Error fetching circuit!", error))

        // fetch openmeteo API
        const fetchOpenMeteoData = async () =>{
            
        }
    }, [])


    


    // TODO: create a function that automatically see the location (maybe feel like into the main with flags and name countries) and return the right country and the weather too.

    // TODO: create a function that automatically see the weather and return the right tyres that were used/using in the current GP

    // TODO: create a function that I can navigate through the circuits (previous and next)

    // TODO: create the layout of the page
    return <Container></Container>
}
