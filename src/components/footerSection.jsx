
import { Col, Row, } from 'reactstrap'
import '../assets/css/footer.css'
import Logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Telegram from '../assets/images/icons/telegram.svg'
import Discord from '../assets/images/icons/discord.svg'
import Twitter from '../assets/images/icons/twitter.svg'
import Instagram from '../assets/images/icons/instagram.svg'
import Youtube from '../assets/images/icons/youtube.svg'
export default function FooterSection() {
    return (
        <section className='footer'>
            <footer>
                <Row className='content'>
                    <Col lg={4} className='text-center text-lg-start'>
                        <img src={Logo} alt="Logo" className='logo' />
                        <p className='para para-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </Col>
                    <Col lg={8}>
                        <Row className='link-box text-center text-md-start'>
                            <Col md={4}>
                                <h2 className='head-2'> Platform</h2>

                                <div className='links'>
                                    <p className='para para-3'><Link to={"#"}>Casino</Link> </p>
                                    <p className='para para-3'><Link to={"#"}>Sportsbook</Link> </p>
                                    <p className='para para-3'><Link to={"#"}>FAQ</Link> </p>
                                </div>

                            </Col>
                            <Col md={4}>
                                <h2 className='head-2'> About us </h2>
                                <div className='links'>
                                    <p className='para para-3'><Link to={"#"}>About Us</Link> </p>
                                    <p className='para para-3'><Link to={"#"}>Privacy Policy</Link> </p>
                                    <p className='para para-3'><Link to={"#"}>Terms and Conditions</Link> </p>
                                    <p className='para para-3'><Link to={"#"}>How To Play</Link> </p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <h2 className='head-2'> Contact </h2>
                                <div className='links'>
                                    <p className='para para-3'> Support : <Link to={"#"}> <span> support@bitsky.com </span></Link> </p>
                                    <p className='para para-3'> Partners : <Link to={"#"}> <span>  partners@bitsky.com </span></Link> </p>
                                    <p className='para para-3'> Legal : <Link to={"#"}> <span>  legal@bitsky.com </span></Link> </p>
                                    <div className='social_icons'>
                                        <Link to="#"> <img src={Telegram} alt="Telegram Icon" /> </Link>
                                        <Link to="#"> <img src={Discord} alt="Discord Icon" /> </Link>
                                        <Link to="#"> <img src={Twitter} alt="Twitter Icon" /> </Link>
                                        <Link to="#"> <img src={Instagram} alt="Instagram Icon" /> </Link>
                                        <Link to="#"> <img src={Youtube} alt="Youtube Icon" /> </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12">
                        <div className='divider'></div>
                        <p className='m-0 para para-1 text-center'>2024 Bitsky.bet, All Rights Reserved</p>
                    </Col>
                </Row>
            </footer>
        </section>
    )
}
