import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ title, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {title}
    </Btn>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
