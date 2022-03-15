import { useNavigate } from "react-router-dom";
import buttonIcon from "../assets/icons/homepage-button-icon.png";
import productsData from "../data/products.json";
import classes from "../styles/pages/HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  /**
   * Why this function. In your schema you can have:
   * {
   *  category: "cold-dishes",
   *  title: "Dishes Served Best Cold"
   * }
   *
   * So you can display something fancy in the webpage (title) and also have a computer friendly name (category)
   */
  function onClickHandler(item) {
    navigate(`/${item.category.toLowerCase()}`);
  }

  // Component length -1
  // If a sub coomponent is too long like this one, it should be outside the component.
  // So you should have a "HomeCategory" or similar named component
  const productCategoriesInfo = productsData.map((item) => (
    <div key={item.id} className={classes.categoryInfoWrapper}>
      {/* Why if is Deserts?, What happens if you have 5 categories instead of just 3, how do you choose the 2 and 4 in the middle instead of just Dishes at position 2? */}
      {/* Answer, check how to detect even and odd in CSS :nth-child(even) */}
      {/* Link: https://www.w3.org/Style/Examples/007/evenodd.en.html */}
      <div
        className={
          item.category !== "Desserts"
            ? classes.informationWrapper
            : classes.invertedInformationWrapper
        }
      >
        <h2>{item.category}</h2>
        <p>{item.categoryDescription}</p>
        <button onClick={() => onClickHandler(item)}>
          <img
            className={classes.icon}
            src={buttonIcon}
            alt="a white outline of a plant in a green background"
          />
          View menu
        </button>
      </div>
      <img
        className={classes.categoryImage}
        src={require(`../assets/images/${item.categoryImageURL}`)}
        alt={item.imageDescription}
      />
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
