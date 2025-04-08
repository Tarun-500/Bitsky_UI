import { Col, Row } from 'reactstrap'
import '../assets/css/subscribe.css'
import ImgOne from '../assets/images/subscribe-1.webp'
import ImgTwo from '../assets/images/subscribe-2.webp'
export default function SubscribeSection() {
  return (
    <section className='subscribe_section'>
      <Row>
        <Col md={6} className='mask mask-1'>
          <img src={ImgOne} alt="Subscribe" className='masked' />
        </Col>
        <Col md={6} className='mask mask-2'>
          <img src={ImgTwo} alt="Subscribe" className='masked' />
        </Col>
      </Row>
    </section>
  )
}
