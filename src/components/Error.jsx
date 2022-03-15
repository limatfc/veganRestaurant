import classes from "../styles/components/Error.module.css";
import image from "../assets/images/error-try-again.jpg";

// great
export default function Error() {
  return (
    <section>
      <h2>
        Ops, it seems like the URL you are trying to access does not exist.
        Please, try again.
      </h2>
      <img
        className={classes.errorImage}
        src={image}
        alt="Letter blocks forming the sentence Why Not Try"
      />
    </section>
  );
}
