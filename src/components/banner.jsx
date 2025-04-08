import { Row, Col } from 'reactstrap'
import '../assets/css/banner.css'
import WelcomeSlider from './slider'
import WinBig from '../assets/images/win-big.png'
export default function Banner() {
    return (
        <section className='banner_section'>
            <Row>
                <Col className="banner">
                    <Row>
                        <Col md={6}>
                            <img src={WinBig} alt="Win Big Logo" />
                            <p>In Bitsky</p>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </Col>
            </Row>
            <WelcomeSlider />
        </section>
    )
}
