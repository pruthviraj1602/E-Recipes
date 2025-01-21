import React from 'react';
import './Sidebar.css';

const Sidebar = ({ tag, setTagName }) => {
  return (
    <div>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
        <h5 className="text-center">Categories</h5>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto text-center">
          {tag.map((t, index) => (
            <li className="nav-item" key={index}>
              <a
                onClick={() => setTagName(t)}
                href="#"
                className="nav-link fw-bolder text-dark"
                aria-current="page"
              >
                {t}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
