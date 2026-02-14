import useFilter from "../Hooks/useFilter";
import Card from "../Components/Card";

function Category() {
  const category = useFilter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-auto x-w-screen-7xl mx-auto gap-4 p-4 mt-14 ">
      {category.length &&
        category.map((item) => {
          return <Card key={item.id} item={item} />;
        })}{" "}
    </div>
  );
}

export default Category;
