import { Col, Row } from 'reactstrap'
import '../assets/css/subscribe.css'
import ImgOne from '../assets/images/subscribe-1.png'
import ImgTwo from '../assets/images/subscribe-2.png'
import Email from "../assets/images/email.svg"
export default function SubscribeSection() {
  return (
    <section className='subscribe_section'> 
      <Row className='mx-0'>
        <Col lg={6}>
          <div className='subscribe-box subscribe-box-1'>
            <img src={ImgOne} alt="Subscribe" className='img-fluid' />

            <div className='subscribe-text'>
              <h2>Subscribe to our news!</h2>
              <p>Please provide your email to receive regular updates on our promotions and tournaments.</p>
              <div className='input'>
                <input type="email" placeholder='Enter your email' />
                <img src={Email} alt="Email" className='email-icon' />
              </div>
              <div className='btn-pink-wrapper'>
                <div className='btn-pink-box'>
                  <button className='btn-pink' type='button'>
                    <div className="btn-content"><span className="text">Subscribe</span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className='subscribe-box subscribe-box-2'>
            <img src={ImgTwo} alt="Subscribe" className='img-fluid' />
            <div className='subscribe-text'>
              <h2>Got any questions?</h2>
              <p>Visit our FAQ section for  <br/> comprehensive information on <br/> frequently asked questions.</p>
              <div className='btn-pink-wrapper'>
                <div className='btn-pink-box'>
                  <button className='btn-pink' type='button'>
                    <div className="btn-content"><span className="text">FAQ</span></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}
