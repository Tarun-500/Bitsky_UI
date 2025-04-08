import Banner from "./components/banner"
import Footer from "./components/footer"
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
        <Footer />
      </div>

    </>
  )
}

export default App
