import { Col, Row } from 'reactstrap'
import '../assets/css/refer.css'
import ImgOne from '../assets/images/refer-1.webp'
import ImgTwo from '../assets/images/refer-2.webp'
import ImgThree from '../assets/images/play-off-game.webp'
export default function ReferSection() {
  return (
    <section className="refer">
      <Row>
        <Col md={6}>
          <div className="mask mask-1">
            <img src={ImgOne} alt="Subscribe" className='masked' />
          </div>
        </Col>
        <Col md={6}>
          <div className='mask mask-2'>
            <img src={ImgTwo} alt="Subscribe" className='masked' />
          </div>
        </Col>

        <Col sm={12}>
          <div className='mask mask-3'>
            <img src={ImgThree} alt="Play Off Game" className='masked' />
          </div>
        </Col>
      </Row>
    </section>
  )
}
