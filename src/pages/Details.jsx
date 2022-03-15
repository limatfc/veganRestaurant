import { useParams, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { DetailsIngredients } from "../components/DetailsIngredients";
import { categoryFinder } from "../scripts/category-finder";
import classes from "../styles/pages/Details.module.css";

export default function Details() {
  const { categoryName, dishName } = useParams();
  const navigate = useNavigate();

  // Minor detail, try to put the if withouth an extra line, to know that its related to foundCategory
  const foundCategory = categoryFinder(categoryName);
  if (!foundCategory) return <Error />;

  const foundDishName = dishFinder(foundCategory); // <= suggested refactor to make it one line like foundCategory
  if (!foundDishName) return <Error />;

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
      {/* Requirement -1, this should be a real HTML table */}
      <img
        className={classes.nutritionalTableImage}
        src={require(`../assets/images/products/nutritional-facts/${nutritionalFacts}`)}
        alt={`A table containing the nutritional values of the ${name} dish.`}
      />
      <button onClick={() => navigate(`/${categoryName}`)}>Go back</button>
    </div>
  );
}
