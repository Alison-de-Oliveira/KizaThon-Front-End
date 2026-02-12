function Card(props) {
  return (
    <div className="bg-[url(./Components/img/background-card.png)] w-full border-2 relative items-center justify-items-center border-white border-default rounded-sm shadow-xs">
      <h5 className="mt-6 mb-2 text-3xl text-white text-center zelda-text tracking-tight text-heading">
        {props.item.name}
      </h5>
      <img
        className=" border-3  rounded-l w-full h-auto border-white md:h-50 md:w-60"
        src={props.item.image}
        alt=""
      />
      <div className=" mt-2 text-white bottom-2 left-5">
        <p>id:{props.item.id}</p>
      </div>

      <p className="mb-6 mt-5 zelda-text text-white text-2xl text-center">
        {props.item.common_locations && (
          <span> {props.item.common_locations.join(" , ")} </span>
        )}
      </p>
      <div className="m-4 border-2 h-auto border-white rounded-xl bg-stone-900/80">
        <p className="p-3 font-sans italic text-white text-center">
          {props.item.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
