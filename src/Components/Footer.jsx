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
                    JosueFS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl text-white zelda-text text-heading uppercase">
                Créditos
              </h2>
              <ul className="text-body zelda-text text-xl text-amber-200">
                <li className="mb-4">
                  <a
                    title="Documentação da API utilizada neste projeto"
                    href="https://gadhagod.github.io/Hyrule-Compendium-API/#/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Hyrule Compendium API
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        {/* Social Media Links */}
        <div className="sm:flex sm:items-center sm:justify-center gap-10">
          {/* Discord invite */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              title="Junte-se à nossa comunidade no Discord"
              href="https://discord.gg/UHB8ju3x"
              target="_blank"
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

          {/* Github Repository link */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              title="Acesse o repositório do projeto"
              href="https://github.com/Alison-de-Oliveira/KizaThon-Front-End"
              target="_blank"
              className="text-body hover:text-heading me-5"
            >
              <svg
                className="w-10 h-10 fill-amber-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 56 56"
              >
                <g
                  id="Icons"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-700.000000, -560.000000)"
                  >
                    <path
                      d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                      id="Github"
                    ></path>
                  </g>
                </g>
                <script xmlns="" />
              </svg>
              <span className="sr-only">GitHub repository</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
