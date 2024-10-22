import styles from "./Button.module.scss";
import classNames from "classnames/bind";
interface Children {
  title: string;
  primary?: boolean;
  redButton?: boolean;
  blueButton?: boolean;
  small?: boolean;
}

const cx = classNames.bind(styles);
function Button({ title, primary, blueButton, redButton, small }: Children) {
  const classes = cx("button", {
    primary,
    blueButton,
    redButton,
    small,
  });
  return <div className={classes}>{title}</div>;
}

export default Button;
