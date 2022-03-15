import { useParams } from "react-router-dom";
import { categoryFinder } from "../scripts/category-finder";
import Error from "../components/Error";
import CategoryDishes from "../components/CategoryDishes";
import classes from "../styles/pages/Category.module.css";

export default function Category() {
  const { categoryName } = useParams();
  const productCategoryRoute = categoryName.toLowerCase();

  const foundCategory = categoryFinder(productCategoryRoute);
  // good safeguard +1
  if (!foundCategory) return <Error />;

  const {
    category,
    categoryDescription,
    categoryImageURL,
    dishes,
    imageDescription,
  } = foundCategory;

  /**
   * Note: It feels weird the CategoryDishes do the map function. CategoryDishes should be CategoryDish (singular)
   * And you do the for loop over here in the parent.
   */

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
      <section className={classes.categoryDishesWrapper}>
        <CategoryDishes
          dishes={dishes}
          productCategoryRoute={productCategoryRoute}
        />
      </section>
    </div>
  );
}
