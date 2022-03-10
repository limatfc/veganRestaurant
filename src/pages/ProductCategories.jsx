import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import Error from "../components/Error";
import classes from "../styles/pages/ProductCategories.module.css";

export default function ProductCategories() {
  const { productCategory } = useParams();
  const productCategoryRouting = productCategory.toLowerCase();

  const findCategory = productsData.find(
    (categoryName) =>
      categoryName.category.toLowerCase() === productCategoryRouting
  );
  if (!findCategory) return <Error />;

  const {
    category,
    categoryDescription,
    categoryImageURL,
    dishes,
    imageDescription,
  } = findCategory;

  const allCategoryDishes = dishes.map((item) => (
    <div className={classes.dishesWrapper}>
      <h3>{item.name}</h3>
      <p>{item.shortDishDescription}</p>
      <img
        className={classes.dishImage}
        src={require(`../assets/images/products/${productCategoryRouting}/${item.dishImageURL}`)}
        alt={item.name}
      />
    </div>
  ));

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
      <section>{allCategoryDishes}</section>
    </div>
  );
}
