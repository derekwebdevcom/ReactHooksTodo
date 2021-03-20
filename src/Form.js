import React, {useState}from 'react'
import './App.scss'

const useInputValue = initialValue => {
const [value, setValue] = useState(initialValue);
  
    return {
      value,
      onChange: e => setValue(e.target.value),
      resetValue: () => setValue("")
    };
  };

function Form({onSubmit, setTodo}) {
    const { resetValue, ...text } = useInputValue("");
    return (
     
<div className="input-div">
  <form onSubmit={e => {
      e.preventDefault();
      onSubmit(text.value);
      resetValue()
    }}>
  <input placeholder="Enter a task" {...text}/>
  
    </form>
    <div className="button-div">
    <button onClick={e => {
      e.preventDefault();
      onSubmit(text.value);
      resetValue()}}>Submit</button><button onClick={() => setTodo([])}>Reset</button>
    </div>
</div>
      
    )
}

export default Form
