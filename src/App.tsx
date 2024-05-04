function App() {
  return (
    <>
      <article className="bg-roxo flex flex-col p-10 gap-10 rounded-xl">
        <img src="./img/capa.png" alt="" className="rounded-md w-full" />
        <section className="flex flex-col gap-2 w-full">
          <h3 className="text-white-custom font-medium text-2xl">
            Acorda Devinho
          </h3>
          <p className="text-white-custom text-lg">Banda Rocketseat</p>
        </section>

        <section className="flex justify-between items-center w-full">
          <span className="material-symbols-rounded text-white-custom icon-button">
            fast_rewind
          </span>
          <span className="material-symbols-rounded text-white-custom icon-button">
            play_arrow
          </span>
          <span className="material-symbols-rounded text-white-custom icon-button">
            fast_forward
          </span>
        </section>
        
        <section>
          <div className="after:content-none after:"></div>
        </section>
      </article>
    </>
  );
}

export default App;
