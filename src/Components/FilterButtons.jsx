import { Outlet, useNavigate } from "react-router-dom";

{
  /*  IMAGENS  */
}
import iconArmas from "../Components/img/icon-armas.png";
import iconCriaturas from "../Components/img/icon-criaturas.png";
import iconInimigos from "../Components/img/icon-inimigos.png";
import iconMateriais from "../Components/img/icon-materiais.png";
import iconTesouros from "../Components/img/icon-tesouros.png";

export default function FilterButtons() {
  const navigate = useNavigate();
  const categories = [
    {
      key: "equipment",
      imgUrl: iconArmas,
      alt: "Icone Armas",
    },
    {
      key: "creatures",
      imgUrl: iconCriaturas,
      alt: "Icone Criaturas",
    },
    {
      key: "monsters",
      imgUrl: iconInimigos,
      alt: "Icone Inimigos",
    },
    {
      key: "materials",
      imgUrl: iconMateriais,
      alt: "Icone Materiais",
    },
    {
      key: "treasure",
      imgUrl: iconTesouros,
      alt: "Icone Tesouros",
    },
  ];

  function UrlParamFromButton(value) {
    console.log(value);
    navigate(`${value}`);
  }

  return (
    <>
      <div className=" flex justify-center items-center gap-4 md:gap-16 w-full max-w-screen-7xl mx-auto ">
        {categories.map(({ key, imgUrl, alt }) => {
          return (
            <span key={key} onClick={() => UrlParamFromButton(key)}>
              <img
                src={imgUrl}
                alt={alt}
                className=" h-8 md:h-12 cursor-pointer hover:scale-110 transition-transform"
              ></img>
            </span>
          );
        })}
      </div>
      <Outlet />
    </>
  );
}
