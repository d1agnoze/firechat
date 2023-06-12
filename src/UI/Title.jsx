import classes from "../css/UI/Title.module.css";
import firebaselogo from "../assets/firebase.png";
const Title = () => {
  return (
      <h1 className={classes.title}>
        FireChat{" "}
        <span>
          <img className={classes.img} src={firebaselogo} alt="" />
        </span>
      </h1>
  );
};
export default Title;
