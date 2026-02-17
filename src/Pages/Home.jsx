import LogoHome from "../Components/img/logo-home.png";

function Home() {
  return (
    <>
      <section className="bg-auto">
        <div className="grid max-w-screen-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="ml-7mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x text-[#E2DED3] ">
              Explore a Enciclopédia de Hyrule
            </h1>
            <p className="max-w-2xl mb-6 font-light text-amber-200 lg:mb-8 md:text-lg lg:text-xl">
              Consulte dados sobre monstros,materiais,equipamentos,tesouros e
              armas de Hyrule
            </p>
            <a
              href="https://gadhagod.github.io/Hyrule-Compendium-API/#/"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-amber-200 focus:ring-4 focus:ring-amber-200 dark:text-white dark:border-gray-70 hover:text-amber-900 hover:scale-110 transition-transform"
            >
              API utilizada
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-80 hover:scale-110 transition-transform">
            <img src={LogoHome} alt="logo-home" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
