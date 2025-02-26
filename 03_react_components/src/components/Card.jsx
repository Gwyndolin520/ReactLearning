import "react";
import "./Card.css"; // 导入样式文件

// eslint-disable-next-line react/prop-types
const Card = ({ header, body, footer }) => {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
