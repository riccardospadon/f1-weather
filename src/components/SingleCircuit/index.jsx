import { Container } from "react-bootstrap"
import styles from "./style.module.scss"
import cn from "classnames"
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons"
import { useState } from "react"

export default function SingleCircuit({ circuits, window }) {

    const circuitId = window.params.id
    const currentIndex = circuits.findIndex(circuit => circuit.id === circuitId)

    const handleNext = () => {
        if(currentIndex < circuits.length - 1) {
            const nextCircuitId = circuits[currentIndex + 1].id
            window.location.href = `/circuits/${nextCircuitId}`
        }
    }

    const handlePrevious = () => {
        if(currentIndex > 0){
            const previousCircuitId = circuits[currentIndex - 1].id
            window.location.href = `/circuits/${previousCircuitId}`
        }
    }

    return (
        <>
            {/* Commands under the navbar for navigate from a circuit to the others */}
            <Container className="d-flex justify-content-between">
                <div onClick={handlePrevious}>
                    <ArrowLeftShort />
                    Previous
                </div>

                <div onClick={handleNext}>
                    Next
                    <ArrowRightShort />
                </div>

                {/* Content: weather from that weekend and the tyres that drivers used */}
                
            </Container>
        </>
    )
}
