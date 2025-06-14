import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CardItem.css';

const CardItem = ({ title, subtitle, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <div className="card-title">{title}</div>
      </div>
      <div className="card-subtitle">{subtitle}</div>
    </div>
  );
};

export default CardItem;
