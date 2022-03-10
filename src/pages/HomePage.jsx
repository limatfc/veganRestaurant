import { useNavigate } from "react-router-dom";
import buttonIcon from "../assets/icons/homepage-button-icon.png";
import productsData from "../data/products.json";
import classes from "../styles/pages/HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  function onClickHandler(item) {
    navigate(`/${item.category.toLowerCase()}`);
  }

  const productCategoriesInfo = productsData.map((item) => (
    <div key={item.id} className={classes.productCategoryInfoWrapper}>
      <h2>{item.category}</h2>
      <p>{item.categoryDescription}</p>
      <img
        className={classes.productCategoryInfoImage}
        src={require(`../assets/images/${item.categoryImageURL}`)}
        alt={item.imageDescription}
      />
      <button onClick={() => onClickHandler(item)}>
        <img
          className={classes.icon}
          src={buttonIcon}
          alt="a white outline of a plant in a green background"
        />
        View menu
      </button>
    </div>
  ));

  return (
    <div>
      <section className={classes.heroWrapper}>
        <h1>Oh My Veggies!</h1>
        <h1>Vegetables you can count on</h1>
      </section>
      {productCategoriesInfo}
    </div>
  );
}
