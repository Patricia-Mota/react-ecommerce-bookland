function ItemListContainer(props) {
  const { greeting } = props;

  const grettingStyles = {
    color: "#1f3f66",
  };
  return (
    <div className="container">
      <p style={grettingStyles}>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
