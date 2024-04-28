const RestaurantCategory = ({data}) => {
  console.log(data);

  return (
    <div>
      {/* header */}
      <div>
        <span>{data.title}</span>
        <span></span>
      </div>
      {/* accordion body */}
    </div>
  );
}

export default RestaurantCategory;