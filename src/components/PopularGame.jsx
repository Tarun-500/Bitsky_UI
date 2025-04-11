import "../assets/css/popularGame.css"
import Game1 from '../assets/images/game-1.webp'
import Game2 from '../assets/images/game-2.webp'
import Game3 from '../assets/images/game-3.webp'
import Game4 from '../assets/images/game-4.webp'
import Game5 from '../assets/images/game-5.webp'
import Game6 from '../assets/images/game-6.webp'
import Game7 from '../assets/images/game-7.webp'
import Game8 from '../assets/images/game-8.webp'
import Game9 from '../assets/images/game-9.webp'
import Game10 from '../assets/images/game-10.webp'

const data = [
  { id: 1, name: "game one", img: Game1 },
  { id: 2, name: "game two", img: Game2 },
  { id: 3, name: "game three", img: Game3 },
  { id: 4, name: "game one", img: Game4 },
  { id: 5, name: "game one", img: Game5 },
  { id: 6, name: "game one", img: Game6 },
  { id: 7, name: "game one", img: Game7 },
  { id: 8, name: "game one", img: Game8 },
  { id: 9, name: "game one", img: Game9 },
  { id: 10, name: "game ten", img: Game10 },
]
export default function PopularGame() {
  return (
    <section className="popularGame_section">
      <div className="main-head">
        <h2 className="head-5 heading text-center"> Popular Games </h2>
      </div>



      <div className="games">
        {data?.map((data) => {
          return (
            <div className="box" key={data.id}>
              <div className="mask">
                <img src={data.img} alt={data.name} loading="lazy" className="masked" />
              </div>
            <div className="btn-shadow">
            <div className="btn-wrapper">
                <button className="game-button" type="button">
                  <div className="content"><span className="text">Play Now</span></div>
                </button>
              </div>

            </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
