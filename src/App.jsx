import Banner from "./components/banner"
// import FooterSection from "./components/footer"
import PopularGame from "./components/PopularGame"
import ReferSection from "./components/refer"
import SocialMedia from "./components/SocialMedia"
import SubscribeSection from "./components/SubscribeSection"

function App() {

  return (
    <>
      <Banner />
      <div className="bg-banner">
        <ReferSection />
        <PopularGame />
        <SubscribeSection />
        <SocialMedia />
        {/* <FooterSection /> */}
      </div>

    </>
  )
}

export default App
