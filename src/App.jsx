import LandingButton from './components/LandingButton'

const App = props => {
  return (
    <main className="font-sans">
      <section className="grid grid-cols-landing md:gap-16 lg:gap-0 items-start h-screen bg-half-square before:clip-sm before:lg:clip-lg after:bg-blue-500 after:clip">
        <h1 className="col-start-2 self-end lg:self-center justify-self-center justify-center max-w-[9ch] p-9 text-center title-clamp text-linear font-bold drop-shadow-sm ">
          Save & Buy Pictures
        </h1>
        <div className="col-start-2 flex flex-col md:flex-row gap-10 justify-between items-center p-9 px-16 lg:gap-0">
          <p className="max-w-[25ch] text-lg md:text-2xl lg:text-4xl font-light text-center text-sky-90 md:text-left md:leading-normal lg:leading-normal">
            Buy and save in boards your favorites pictures and bring your vision to life. Start exploring now!
          </p>
          <LandingButton rounded={true}/>
        </div>
      </section>
    </main>
  )
}

export default App
