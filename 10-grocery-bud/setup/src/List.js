import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ groceries, removeGrocery, editGrocery }) => {
  const groceryList = groceries?.map((grocery) => {
    const { id, title } = grocery;
    return (
      <article key={id} className='grocery-item'>
        <p className='title'>{title}</p>
        <div className='btn-container'>
          <button
            onClick={() => {
              editGrocery(id);
            }}
            type='button'
            className='edit-btn'>
            <FaEdit />
          </button>
          <button
            onClick={() => {
              removeGrocery(id);
            }}
            type='button'
            className='delete-btn'>
            <FaTrash />
          </button>
        </div>
      </article>
    );
  });

  return <div className='grocery-list'>{groceryList}</div>;
};

export default List;
