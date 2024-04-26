import './input.css';

const Input = ({ className, type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className={`in ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;
