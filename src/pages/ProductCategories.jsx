import { useParams } from "react-router-dom";
import productsData from "../data/products.json";

export default function ProductCategories() {
  const { productCategory } = useParams();
  const productCategoryRouting = productCategory.toLowerCase();

  const findCategory = productsData.find(
    (categoryName) =>
      categoryName.category.toLowerCase() === productCategoryRouting
  );
  console.log(findCategory);
  return (
    <div>
      <h1>{productCategoryRouting}</h1>
      <h2>Heeeeeey</h2>
    </div>
  );
}
