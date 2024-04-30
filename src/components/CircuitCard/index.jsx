import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import cn from "classnames"
import styles from "./style.module.scss"

export default function CircuitCard({ circuit, layout, flag }) {
    // function for change date format
    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "UTC",
            timeZoneName: "short",
        }
        return new Date(dateString).toLocaleDateString("it-IT", options)
    }

    return (
        <Col className={cn("mb-5 d-flex")} xs={12} sm={6} lg={3}>
            <Link
                to={`/circuit/${circuit.circuit_key}`}
                className={cn(styles.textDeco)}
            >
                <Card className={cn(styles.cardCircuit, styles.bg)}>
                    <Card.Body>
                        <Card.Title
                            className={cn("card-title", styles.nameCircuit)}
                        >
                            <div className="d-flex justify-content-between">
                                {/* location of the grand prix */}
                                <h4>{circuit.country_name}</h4>
                                {/* country flag */}
                                {flag && (
                                    <Card.Img
                                        src={flag}
                                        variant="top"
                                        className={cn(styles.flag)}
                                    />
                                )}
                            </div>
                        </Card.Title>
                        {/* layout of the grand prix*/}
                        {layout && (
                            <Card.Img
                                src={layout}
                                variant="top"
                                className={cn(styles.imgCircuit)}
                            />
                        )}

                        {/* date of the weekend */}
                        <p>{formatDate(circuit.date_start)}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}