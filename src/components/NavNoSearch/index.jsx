import cn from "classnames"
import styles from "./style.module.scss"
import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../images/f1logowhite.png"

export default function NavNoSearch() {
    return (
        <Navbar expand="lg" className={cn(styles.navbg, "mb-2")}>
            <Container>
                <Link
                    to="/"
                    className={cn(styles.navLink, "d-flex align-items-center")}
                >
                    <img src={logo} alt="F1.png" className={cn(styles.logo)} />
                    <div className={cn(styles.yearWeather)}>2024 WEATHER</div>
                </Link>
            </Container>
        </Navbar>
    )
}
