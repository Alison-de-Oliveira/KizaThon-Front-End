import logoFooter from "../Components/img/logo-footer.png";

function Footer() {
  return (
    <footer className="bg-indigo-900/40">
      <div className="mx-auto w-full max-w-screen-7xl p-4 py-6 lg:py-8 border-t border-white">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center pointer-none:">
              <img src={logoFooter} className="h-60 me-3" alt="Zelda Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-xl text-white zelda-text text-heading uppercase">
                Tecnologias
              </h2>
              <ul className="text-body zelda-text text-lg text-amber-200">
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Tailwild CSS
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    className="hover:underline"
                  >
                    React
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://vite.dev/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Vite
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://fastapi.tiangolo.com/"
                    target="_blank"
                    className="hover:underline"
                  >
                    FastAPI
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Python
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl text-white zelda-text text-heading uppercase">
                Colaboradores
              </h2>
              <ul className="text-body zelda-text text-xl text-amber-200">
                <li className="mb-4">
                  <a
                    href="https://github.com/Alison-de-Oliveira"
                    target="_blank"
                    className="hover:underline "
                  >
                    Alison de OLiveira
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/PabloK-DEV?tab=overview&from=2025-12-01&to=2025-12-31"
                    target="_blank"
                    className="hover:underline "
                  >
                    PabloK-Dev
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/AlanSCorreia"
                    target="_blank"
                    className="hover:underline "
                  >
                    AlanSCorreia
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/JosueFS"
                    target="_blank"
                    className="hover:underline"
                  >
                    Josué FS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl text-white zelda-text text-heading uppercase">
                Repositório
              </h2>
              <ul className="text-body zelda-text text-xl text-amber-200">
                <li className="mb-4">
                  <a
                    href="https://github.com/Alison-de-Oliveira/KizaThon-Front-End"
                    target="_blank"
                    className="hover:underline"
                  >
                    GITHUB
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://discord.gg/UHB8ju3x"
              className="text-body hover:text-heading ms-5"
            >
              <svg
                className="w-10 h-10 fill-amber-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
