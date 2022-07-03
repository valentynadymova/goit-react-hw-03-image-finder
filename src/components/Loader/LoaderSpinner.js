import {ThreeCircles} from "react-loader-spinner";
import styles from "./LoaderSpinner.module.scss";

const LoaderSpinner = () => {
  return (
    <ThreeCircles
      className={styles.Loader}
      type="ThreeDots"
      color="#000000"
      height={80}
      width={80}
      timeout={3000}
    />
  );
};

export default LoaderSpinner;
