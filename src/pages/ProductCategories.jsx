import { useParams } from "react-router-dom";
import { categoryFinder } from "../scripts/category-finder";
import Error from "../components/Error";
import ProductCategoryDishes from "../components/ProductCategoryDishes";
import classes from "../styles/pages/ProductCategories.module.css";

export default function ProductCategories() {
  const { productCategory } = useParams();
  const productCategoryRoute = productCategory.toLowerCase();

  const foundCategory = categoryFinder(productCategoryRoute);
  if (!foundCategory) return <Error />;

  const {
    category,
    categoryDescription,
    categoryImageURL,
    dishes,
    imageDescription,
  } = foundCategory;

  return (
    <div>
      <div className={classes.categoryImageWrapper}>
        <img
          src={require(`../assets/images/${categoryImageURL}`)}
          alt={imageDescription}
          className={classes.categoryImage}
        />
        <h1 className={classes.title}>{category}</h1>
      </div>
      <p className={classes.categoryDescription}>{categoryDescription}</p>
      <section>
        <ProductCategoryDishes
          dishes={dishes}
          productCategoryRoute={productCategoryRoute}
        />
      </section>
    </div>
  );
}
