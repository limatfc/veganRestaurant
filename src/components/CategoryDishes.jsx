import { useNavigate } from "react-router-dom";
import classes from "../styles/components/CategoryDishes.module.css";

export default function CategoryDishes({ dishes, productCategoryRoute }) {
  const navigate = useNavigate();

  const allCategoryDishes = dishes.map((item) => (
    <div
      onClick={() => navigate(`/${productCategoryRoute}/${item.name}`)}
      key={item.id}
      className={classes.dishesWrapper}
    >
      <h3>{item.name}</h3>
      <p>{item.shortDishDescription}</p>
      <img
        className={classes.dishImage}
        src={require(`../assets/images/products/${productCategoryRoute}/${item.dishImageURL}`)}
        alt={item.name}
      />
    </div>
  ));

  return allCategoryDishes;
}
