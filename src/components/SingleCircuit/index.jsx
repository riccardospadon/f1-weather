import { Container } from "react-bootstrap"
import NavNoSearch from "../NavNoSearch"
import styles from "./style.module.scss"
import cn from "classnames"
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons"

export default function SingleCircuit() {
    return (
        <>
            <NavNoSearch />
            {/* Commands under the navbar for navigate from a circuit to the others */}
            <Container className="d-flex justify-content-between">
                <div>
                    <ArrowLeftShort />
                    Previous
                </div>

                <div>
                    Next
                    <ArrowRightShort />
                </div>
            </Container>
        </>
    )
}
