import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

function CategoryFilter() {
  let { filter } = useParams();

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-7xl mx-auto gap-4 p-4 ">
      {category.length &&
        category.map((item) => {
          return <Card item={item} />;
        })}{" "}
    </div>
  );
}

export default CategoryFilter;
