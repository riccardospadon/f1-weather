import { Container } from "react-bootstrap"
import styles from "./style.module.scss"
import cn from "classnames"

export default function SingleCircuit() {
    const tyres = {
        C1: "http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/white-parentesi.png", // hard tyre
        C2: "http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/yellow-parentesi.png", // medium tyre
        C3: "http://d3nv2arudvw7ln.cloudfront.net/staticfolder/Tyre/resources/img/red-parentesi.png", // soft tyre
        INTERMEDIATE:
            "https://d3nv2arudvw7ln.cloudfront.net/images/global/380/862/cinturato-green-intermediate-4505508953587.png",
        FULL_WET:
            "https://d3nv2arudvw7ln.cloudfront.net/images/global/968/233/cinturato-blue-wet-4505508953865.png",
    }

    return <Container></Container>
}
