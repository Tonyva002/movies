import React from 'react';
import '../css/ContentGrid.css';

const ContentGrid = ({ title, items }) => (
  <div>
    <h2>{title}</h2>
    <div className="grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt={item.title || item.name}
          />
          <p>{item.title || item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ContentGrid;
