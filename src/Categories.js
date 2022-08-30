import React from "react";

const Categories = ({ filterItems, categories }) => {
  // return <div className='btn-container'>
  //   <button className='filter-btn' onClick={() => filterItems('all')}>all</button>
  //   <button className='filter-btn' onClick={() => filterItems('breakfast')}>breakfast</button>
  // </div>;

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
