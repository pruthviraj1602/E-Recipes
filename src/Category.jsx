import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ id, name, image, rating }) => {
  return (
    <div className="col">
      <div className="card shadow border-0 text-center" style={{ height: '55vh' }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="fw-bold">Rating: {rating}</p>
          <Link to={`/recipe/${id}`} className="btn btn-outline-primary border-top border-bottom btn-sm w-50">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
