import Banner from "./components/banner"
import FooterSection from "./components/footerSection"
import PopularGame from "./components/PopularGame"
import ReferSection from "./components/refer"
import SocialMedia from "./components/SocialMedia"
import SubscribeSection from "./components/SubscribeSection"

function App() {

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

export default App
