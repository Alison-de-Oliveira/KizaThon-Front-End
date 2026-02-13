import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

{
  /*  IMAGENS  */
}
import iconArmas from "../Components/img/icon-armas.png";
import iconCriaturas from "../Components/img/icon-criaturas.png";
import iconInimigos from "../Components/img/icon-inimigos.png";
import iconMateriais from "../Components/img/icon-materiais.png";
import iconTesouros from "../Components/img/icon-tesouros.png";

function Category() {
  const [category, setCategory] = useState([]);
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

  const getData = async () => {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v3/compendium/all`,
    );
    const data = await response.json();
    // console.log(data);
    setCategory(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className=" flex justify-center items-center gap-4 md:gap-16 w-full max-w-screen-7xl mx-auto ">
        {categories.map(({ key, imgUrl, alt }) => {
          return (
            <button onClick={() => UrlParamFromButton(key)}>
              <img
                src={imgUrl}
                alt={alt}
                className=" h-8 md:h-12 hover:scale-110 transition-transform"
              ></img>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-auto x-w-screen-7xl mx-auto gap-4 p-4 mt-14 ">
        {category.length &&
          category.map((item) => {
            return <Card key={item.id} item={item} />;
          })}{" "}
      </div>
    </div>
  );
}

export default Category;
