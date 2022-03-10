import productsData from "../data/products.json";

export function categoryFinder(productCategoryRoute) {
  const foundCategory = productsData.find(
    (categoryName) =>
      categoryName.category.toLowerCase() === productCategoryRoute
  );
  return foundCategory;
}
