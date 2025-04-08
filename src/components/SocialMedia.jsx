import { Col, Row } from 'reactstrap'
import '../assets/css/socialMedia.css'
import Banner from '../assets/images/social-mask-main.png'
import Youtube from '../assets/images/icons/youtube.png'
import Instagram from '../assets/images/icons/instagram.png'
import Twitch from '../assets/images/icons/twitch.png'
import Facebook from '../assets/images/icons/facebook.png'
import Whatsapp from '../assets/images/icons/whatsapp.png'
import Tiktok from '../assets/images/icons/tiktok.png'

const link = [
{ id: 1,  name:"Youtube", img: Youtube },
{ id: 2, name:"Instagram", img: Instagram },
{ id: 3, name:"Twitch", img: Twitch },
{ id: 4, name:"Facebook", img: Facebook },
{ id: 5, name:"Whatsapp", img: Whatsapp },
{ id: 6, name:"Tiktok", img: Tiktok }
]
export default function SocialMedia() {
  return (
    <section className="socialMedia_section">
      <button className="green-mask-button"> Social Media </button>
      <div className='socialMedia'>
        <img src={Banner} alt="Masked" className='masked' />

        <Row className='content'>
          <Col md={4} className='mt-auto'>  <h2 className='head-4 mb-5'> Follow Us on {">>"} </h2> </Col>
          <Col md={8}>
            <div className='links'>
              {link.map((item) => {
                return (
                  <div className='link' key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <p className='m-0 para para-4'> {item.name} </p>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </div>


    </section>
  )
}
