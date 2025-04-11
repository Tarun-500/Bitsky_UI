import { Col, Row } from 'reactstrap'
import '../assets/css/refer.css'
import Gamer from '../assets/images/gamer-1.png'
import Gamer2 from '../assets/images/gamer-2.png'
import Boy from '../assets/images/refer-boy.png'
import Girl from '../assets/images/refer-girl.png'
import Layer1 from '../assets/images/refer-box-1.webp'
import Layer2 from '../assets/images/refer-box-2.webp'
import GamerLayer from '../assets/images/gamer-layer.webp'
export default function ReferSection() {
  return (
    <section className="refer">
      <Row className='mx-0'>
        <Col lg={6}>
          <div className='boxes'>
            <img src={Layer1} alt="Layer 1" className='img-fluid layer layer-1' />
            <div>
              <div>
                <img src={Boy} alt="boy" className='over-img over-img-1' />
              </div>

              <div className='layer-content layer-content-1'>
                <h2 className=''>Refer Your Friend and Earn Rewards!</h2>
                <p className=''>Refer your friends and enjoy <br /> exclusive bonuses and <br />discounts.</p>
                <div className='btn-pink-wrapper'>
                  <div className='btn-pink-box'>
                    <button className='btn-pink' type='button'>
                      <div className="btn-content"><span className="text">Play Now</span></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className='boxes'>
            <img src={Layer2} alt="Layer 2" className='img-fluid layer layer-2' />
            <div>
              <div>
                <img src={Girl} alt="Girl" className='over-img over-img-2' />
              </div>

              <div className='layer-content layer-content-2'>
                <h2 className=''>Where the excitement knows no bounds</h2>
                <p className=''>Experience unparalleled joy with our exclusive perks, from high-stakes adventures to unforgettable triumphs!</p>
                <div className='btn-pink-wrapper'>
                  <div className='btn-pink-box'>
                    <button className='btn-pink' type='button'>
                      <div className="btn-content"><span className="text">Play Now</span></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12}>
          <div className='gamer-section'>
            <img src={Gamer2} alt="Play Off Game" className='img-fluid' />
            <div className='gamer-box'>
              <img src={GamerLayer} alt="Play Off Game" className='img-fluid' />
                <Row className='content mx-0'>
                  <Col xs={6} className='text-center my-auto'>
                    <button className='green-mask-button'>Play Off Market Games</button>
                  </Col>
                  <Col xs={6}  className='position-relative'>
                    <img src={Gamer} alt="gamer" className='gamer img-fluid' />
                  </Col>
                </Row>
            </div>
          </div>
        </Col>

      </Row>
    </section>
  )
}
