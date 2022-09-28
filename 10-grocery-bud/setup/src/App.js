import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState('');
  const [alert, setAlert] = useState({ text: '', success: true });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!grocery) {
      return setAlert({ text: 'Please Enter Value', success: false });
    }
    if (isEdit) {
      setGroceries((preGroceries) => {
        return preGroceries.map((item) => {
          return item.id === editId ? { ...item, title: grocery } : item;
        });
      });
      setIsEdit(false);
      setEditId(null);
      setGrocery('');
      setAlert({ text: 'Value Changed', success: true });
      return;
    }

    const newGrocery = {
      id: new Date().getTime().toString(),
      title: grocery,
    };
    setGroceries((preGroceries) => {
      return [...preGroceries, newGrocery];
    });
    setGrocery('');
    setAlert({ text: 'Item Added To The List', success: true });
  };

  const clearAll = () => {
    setGroceries([]);
    setAlert({ text: 'Empty List', success: false });
  };

  const removeGrocery = (id) => {
    setGroceries((preGroceries) => {
      return preGroceries.filter((grocery) => {
        return grocery.id !== id;
      });
    });
    setAlert({ text: 'Item Removed', success: false });
  };

  const editGrocery = (id) => {
    const target = groceries.find((grocery) => grocery.id === id);
    console.log(id);
    setIsEdit(true);
    setEditId(id);
    setGrocery(target.title);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ text: '', success: true });
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('grocery')) || [];
    setGroceries(data);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(groceries);
    localStorage.setItem('grocery', data);
  }, [groceries]);

  return (
    <section className='section-center'>
      <form
        className='grocery-form'
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <Alert {...alert} />
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            onChange={(e) => {
              setGrocery(e.target.value);
            }}
            value={grocery}
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
          />
          <button type='submit' className='submit-btn'>
            {isEdit ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List
          groceries={groceries}
          removeGrocery={removeGrocery}
          editGrocery={editGrocery}
        />
        {groceries?.length > 0 && (
          <button onClick={clearAll} type='button' className='clear-btn'>
            clear items
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
