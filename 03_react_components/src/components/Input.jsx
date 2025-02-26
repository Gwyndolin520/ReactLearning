// eslint-disable-next-line react/prop-types
const Input = ({ onInputChange }) => {
  return (
    <input
      type="text"
      //将输入的值传回父组件
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="..."
    />
  );
};
export default Input;
