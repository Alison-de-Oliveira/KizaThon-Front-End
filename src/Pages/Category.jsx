import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Category() {
  let { filter } = useParams();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${filter}`,
      );
      const data = await response.json();
      console.log(data);
      setCategory(data.data);
      return data;
    };
    getData();
  }, [filter]);

  return (
    <div className="grid grid-cols-5 gap-4 p-4 justify-items-center ">
      {category.length &&
        category.map((item) => {
          return (
            <div className="bg-[url(./Components/img/background-card.png)] flex-row block max-w-sm border-2 relative items-center justify-items-center border-white border-default rounded-sm shadow-xs">
              <h5 className="mt-6 mb-2 text-3xl text-white text-center zelda-text tracking-tight text-heading">
                {item.name}
              </h5>
              <img
                className=" border-3  rounded-l border-white "
                src={item.image}
                alt=""
              />
              <div className=" mt-2 text-white bottom-2 left-5">
                <p>id:{item.id}</p>
              </div>

              <p className="mb-6 mt-5 zelda-text text-white text-2xl text-center">
                <span> {item.common_locations} </span>
              </p>
              <div className="m-4 border-2  border-white rounded-xl bg-stone-900/80">
                <p className="p-3 font-sans italic text-white text-center">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}{" "}
    </div>
  );
}

export default Category;
