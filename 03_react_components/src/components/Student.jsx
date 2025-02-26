import "react";
import PropTypes from "prop-types";

const Student = ({ name, age, avatar, homepage }) => {
  return (
    <div>
      <h1>学生信息</h1>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        style={{ width: "100px", height: "100px" }}
      />
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <p>
        主页:{" "}
        <a href={homepage} target="_blank" rel="noopener noreferrer">
          {homepage}
        </a>
      </p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
};

export default Student;
