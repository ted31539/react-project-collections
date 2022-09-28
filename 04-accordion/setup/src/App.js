import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [isQuestionsShow, setIsQuestionsShow] = useState(Array(data.length).fill(false));
  
  const toggleQuestion = (id)=> {
    setIsQuestionsShow((preIsQuestionsShow)=> {
      return preIsQuestionsShow.map((preIsShow, index)=> {
        return index === id - 1 ? !preIsShow : preIsShow;
      })  
    })
  }
  
  const questionLsit = data.map((question)=> {
    return (
      <SingleQuestion key={question.id}
       isQuestionsShow={isQuestionsShow[question.id - 1]}
       toggleQuestion={toggleQuestion}
          {...question}/>
    )
  })
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {questionLsit}
        </section>
      </div>
    </main>
    );
}

export default App;
