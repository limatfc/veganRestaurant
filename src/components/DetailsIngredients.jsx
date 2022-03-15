export function DetailsIngredients({ ingredients }) {
  // Do this in CSS
  const upperCaseNames = ingredients.map(
    (ingredient) => ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
  );

  // Why the sort?, usually in the front end we send the ingredient list already sorted to the database
  const sortedIngredientItem = upperCaseNames.sort();

  const ingredientItem = sortedIngredientItem.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <>
      <h2>Ingredients</h2>
      <ul>{ingredientItem}</ul>
    </>
  );
}
