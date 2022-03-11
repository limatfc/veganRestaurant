export function DetailsIngredients({ ingredients }) {
  const upperCaseNames = ingredients.map(
    (ingredient) => ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
  );

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
