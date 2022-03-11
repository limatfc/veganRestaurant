import { useParams } from "react-router-dom";
import { categoryFinder } from "../scripts/category-finder";
import Error from "../components/Error";
import CategoryDishes from "../components/CategoryDishes";
import classes from "../styles/pages/ProductCategories.module.css";

export default function Categories() {
  const { categoryName } = useParams();
  const productCategoryRoute = categoryName.toLowerCase();

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
        <CategoryDishes
          dishes={dishes}
          productCategoryRoute={productCategoryRoute}
        />
      </section>
    </div>
  );
}
