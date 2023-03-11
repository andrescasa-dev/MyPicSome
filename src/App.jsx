const App = props => {
  return (
    <main className="font-sans">
      <section className="grid justify-center items-start h-screen bg-half-square after:bg-blue-500">
        <h1 className="self-end p-9 text-center text-6xl text-linear font-bold drop-shadow-sm">Save & Buy Pictures</h1>
        <div className="flex flex-wrap justify-center items-start gap-10 p-9 px-16">
          <p className="max-w-[25ch] text-lg font-light text-center text-sky-900">Buy and save your favorites pictures and bring your vision to life. Start exploring now!</p>
          <a className="flex px-12 py-4 gap-4 rounded-md text-xl font-bold text-white bg-sky-700" href="#">
            Explore
            <img src="./assets/arrow.svg"/>
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
