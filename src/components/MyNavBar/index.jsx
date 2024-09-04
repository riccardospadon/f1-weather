import styles from './style.module.scss'
import { Navbar, Container, Form } from "react-bootstrap"
import cn from 'classnames'
import { Link } from "react-router-dom"
import logo from '../../images/f1logowhite.png'

export default function MyNavBar({ searchQuery, setSearchQuery, circuits, setSortedCircuits }) {

    // here there will be the function that perform the search about circuits
    const handleSearch = (event) => {
        const searchTerm = event.target.value.trim()
        setSearchQuery(searchTerm)
        const filteredCircuits = circuits.filter(circuit =>
            circuit.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSortedCircuits(filteredCircuits)
    }

    return (
        <Navbar expand="lg" className={cn(styles.navbg, "mb-5")}>
            <Container>
                <Link to='/' className={cn(styles.navLink, 'd-flex align-items-center')}>
                    <img src={logo} alt="F1.png" className={cn(styles.logo)} />
                    <div className={cn(styles.yearWeather)}>2024 WEATHER</div>
                </Link>
                <Form.Group className="pe-5">
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </Form.Group>
            </Container>
        </Navbar>
    )
}
