import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import cn from "classnames"
import styles from "./style.module.scss"

export default function CircuitCard({ circuit }) {
    return (
        <Col className={cn("mb-5 d-flex")} xs={12} sm={6} lg={4}>
            <Link to={`/circuit/${circuit.circuit_key}`} className={cn(styles.textDeco)}>
                <Card className={cn(styles.cardCircuit, styles.cardBg)}>
                    <Card.Title className={cn("card-title", styles.nameCircuit)}>
                        <h4>{circuit.circuit_short_name}</h4>
                        {/*di fianco la bandiera del luogo, se riesco */}
                    </Card.Title>
                    {/* <Card.Img
                        src={circuit.layout}
                        variant="top"
                        className={cn(styles.imgCircuit)}
                    /> */}
                    <Card.Body>
                        {/* qui andrà la data del weekend, poi trovo come fare*/}
                        <p>Date: {circuit.date_start}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}