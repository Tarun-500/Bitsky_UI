
import { Routes, Route } from 'react-router-dom'
import Banner from "./components/banner"
import FooterSection from "./components/footerSection"
import PopularGame from "./components/PopularGame"
import ReferSection from "./components/refer"
import SocialMedia from "./components/SocialMedia"
import SubscribeSection from "./components/SubscribeSection"
import MyAccount from './components/myAccount'

function HomePage() {
  return (
    <>
      <Banner />
      <div className="bg-banner" id="next-section">
        <ReferSection />
        <PopularGame />
        <SubscribeSection />
        <SocialMedia />
        <FooterSection />
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/myAccount" element={<MyAccount />} />
    </Routes>
  )
}

export default App
