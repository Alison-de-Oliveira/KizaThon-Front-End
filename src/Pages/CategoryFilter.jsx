import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

function CategoryFilter() {
  let { filter } = useParams();
  console.log(filter);

  const [category, setCategory] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${filter}`,
    );
    const data = await response.json();
    console.log(data);
    setCategory(data.data);
  };

  useEffect(() => {
    getData();
  }, [filter]);

  return (
    <div className="grid grid-cols-5 gap-4 p-4 justify-items-center ">
      {category.length &&
        category.map((item) => {
          return <Card item={item} />;
        })}{" "}
    </div>
  );
}

export default CategoryFilter;
