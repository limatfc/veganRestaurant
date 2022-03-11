import { useParams, useNavigate } from "react-router-dom";
import { DetailsIngredients } from "../components/DetailsIngredients";
import { categoryFinder } from "../scripts/category-finder";
import classes from "../styles/pages/ProductDetails.module.css";

export default function Details() {
  const { categoryName, dishName } = useParams();

  const navigate = useNavigate();

  const foundCategory = categoryFinder(categoryName);

  const foundDishName = foundCategory.dishes.find(
    (item) => item.name === dishName
  );

  const {
    name,
    dishImageURL,
    ingredients,
    longDishDescription,
    nutritionalFacts,
  } = foundDishName;

  return (
    <div className={classes.productDetailsWrapper}>
      <img
        className={classes.dishImage}
        src={require(`../assets/images/products/${categoryName}/${dishImageURL}`)}
        alt={name}
      />
      <h1>{name}</h1>
      <p>{longDishDescription}</p>
      <hr />
      <DetailsIngredients ingredients={ingredients} />
      <hr />
      <h2>Nutritional Facts</h2>
      <img
        className={classes.nutritionalTableImage}
        src={require(`../assets/images/products/nutritional-facts/${nutritionalFacts}`)}
        alt={`A table containing the nutritional values of the ${name} dish.`}
      />
      <button onClick={() => navigate(`/${categoryName}`)}>Go back</button>
    </div>
  );
}
