import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
    text: PropTypes.string.isRequired
}
function Button({ text }) {
    return <button className={styles.btn}>{text}</button>
}
export default Button;