import { Row, Col } from 'reactstrap'
import '../assets/css/banner.css'
import WelcomeSlider from './slider'
import WinBig from '../assets/images/win-big.png'
import SlotMachine from '../assets/images/slot-machine.png'
import Bitcoin1 from '../assets/images/bitcoin-1.png'
import Bitcoin2 from '../assets/images/bitcoin-2.png'
import Bitcoin3 from '../assets/images/bitcoin-3.png'
import { useNavigate  } from 'react-router-dom'
export default function Banner() {
    const navigate   = useNavigate ()
    return (
        <section className='banner_section'>
            <Row className='mx-0'>
                <Col className="banner">
                    <Row className='content'>
                        <Col md={6} className='left-section text-center'>
                            <div className='left-box'>
                                <img src={WinBig} alt="Win Big Logo" />
                                <h1 className='head-1'>In Bitsky</h1>
                            </div>
                            <div className='btn-pink-wrapper'>
                                <div className='btn-pink-box'>
                                    <button className='btn-pink' type='button' onClick={()=>navigate('/myAccount')}>
                                    <div className="btn-content"><span className="text">Play Now</span></div>
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='right-section text-center position-relative'>
                            <div className='slot'>
                                <img src={SlotMachine} alt="Slot Machine" />
                            </div>
                            <div className='bitcoins'>
                                <img src={Bitcoin2} alt="bitcoin" className='bitcoin bitcoin-1' />
                                <img src={Bitcoin2} alt="bitcoin" className='bitcoin bitcoin-2' />
                                <img src={Bitcoin1} alt="bitcoin" className='bitcoin bitcoin-3' />
                                <img src={Bitcoin1} alt="bitcoin" className='bitcoin bitcoin-4' />
                                <img src={Bitcoin3} alt="bitcoin" className='bitcoin bitcoin-5' />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <WelcomeSlider />
        </section>
    )
}
