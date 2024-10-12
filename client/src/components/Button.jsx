import PropTypes from "prop-types";
import "../styles/button.css";

export default function Button({ text, onClick }) {
  return (
    <button type="submit" id="gradientButton" onClick={onClick}>
      <p id="textButton">{text}</p>
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
