import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useFilter() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  let { filter } = useParams();

  function setUrl(parametro) {
    let url = "";
    if (!parametro) {
      url = "https://botw-compendium.herokuapp.com/api/v3/compendium/all";
    } else {
      url = `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${parametro}`;
    }

    return url;
  }


  const getData = async () => {
    setLoading(true);
    const response = await fetch(setUrl(filter));
    const data = await response.json();
    setCategory(data.data);
    setLoading(false);
  };

  useEffect(() => {
    console.log("Olá, Hook!");
    getData();
  }, [filter]);

  return { category, loading };
}
