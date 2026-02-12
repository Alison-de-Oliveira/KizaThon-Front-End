import { useEffect, useState } from "react";
import Card from "../Components/Card";

function Category() {
  const [category, setCategory] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v3/compendium/all`,
    );
    const data = await response.json();
    console.log(data);
    setCategory(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div></div>
      <div className="grid grid-cols-5 gap-4 p-4 justify-items-center ">
        {category.length &&
          category.map((item) => {
            return <Card item={item} />;
          })}{" "}
      </div>
    </div>
  );
}

export default Category;
