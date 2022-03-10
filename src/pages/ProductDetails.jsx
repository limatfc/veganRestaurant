import { useParams } from "react-router-dom";
import { categoryFinder } from "../scripts/category-finder";

export default function ProductDetails() {
  const { productCategory, dishName } = useParams();
  const foundCategory = categoryFinder(productCategory);
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

  const ingredientItem = ingredients.map((item) => <li>{item}</li>);

  return (
    <div>
      <img
        src={require(`../assets/images/products/${productCategory}/${dishImageURL}`)}
        alt={name}
      />
      <h1>{name}</h1>
      <p>{longDishDescription}</p>
      <hr />
      <h2>Ingredients</h2>
      <ul>{ingredientItem}</ul>
      <img
        src={nutritionalFacts}
        alt={`A table containing the nutritional values of the ${name} dish.`}
      />
    </div>
  );
}
