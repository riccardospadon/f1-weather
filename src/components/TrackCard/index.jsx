import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import cn from "classnames"
import styles from "./style.module.scss"

export default function TrackCard() {
    return (
        <Col className={cn("mb-5 d-flex")} xs={12} sm={6} lg={4}>
            <Link to={`/track/${track._id} className={cn(styles.textDeco)}`}>
                <Card className={cn(styles.cardTrack, styles.cardBg)}>
                    <Card.Title className={cn("card-title", styles.nameTrack)}>
                        <h4>{track.name}</h4>
                        {/*di fianco la bandiera del luogo */}
                    </Card.Title>
                    <Card.Img
                        src={track.layout}
                        variant="top"
                        className={cn(styles.imgTrack)}
                    />
                    <Card.Body>
                        {/* qui andrà la data del weekend, poi trovo come fare*/}
                        <p>Date: {track.event}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}
