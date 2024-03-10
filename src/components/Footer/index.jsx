import { Row, Col } from "react-bootstrap"
import cn from "classnames"
import styles from "./style.module.scss"
import { Github, Linkedin } from "react-bootstrap-icons"

export default function Footer() {
    return (
        <div
            className={cn(
                styles.footBg,
                styles.textCenter,
                styles.pagination,
                "w-100 mt-5"
            )}
        >
            <Row xs={12} className="w-100 justify-content-center">
                <Col
                    xs={6}
                    md={12}
                    className={cn(styles.flexCenter, "mt-5 mb-5")}
                >
                    <div>© F1 2024 Weather. A product of Riccardo Spadon. Check me on:</div>
                    <div className={cn(styles.textCenter, 'ms-1')}>
                        <a
                            className={cn(styles.noDecor)}
                            href="https://github.com/riccardospadon"
                        >
                            <Github className="ms-2" size={24} />
                        </a>
                        <a
                            className={cn(styles.noDecor)}
                            href="https://www.linkedin.com/in/riccardo-spadondev/"
                        >
                            <Linkedin className="ms-3" size={24} />
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
