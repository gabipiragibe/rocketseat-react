import PropTypes from "prop-types";

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
      <h1>Yhuuuu</h1>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
