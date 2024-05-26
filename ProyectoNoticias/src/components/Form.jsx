import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const initialValue = {
        title:"",
        body:"",
        author:"",
        date:""
    };
    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const navigate = useNavigate();
    const validateForm = () =>{
        if (data.title.length < 3 || data.body.length < 3 || data.author.length < 3 || data.date.toString() == ""){
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
        }
    };
    useEffect(() => {
        validateForm();
     }, [data]);
    
    const handleInputChange = (e) => {
        setData({
          ...data, 
          [e.target.name]: e.target.value,
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('new', JSON.stringify(data))
        setData(initialValue);
        setTimeout(()=>{
          navigate("/");
        },1000);
        
      };

  return (
    <div className='form'>
         <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Insert Title"
        onChange={handleInputChange}
        value={data.title}
      />
        <input
        type="text"
        name="body"
        id="body"
        placeholder="Insert Body"
        onChange={handleInputChange}
        value={data.body}
      />
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Insert Author"
        onChange={handleInputChange}
        value={data.author}
      />
       <input
        type="datetime-local"
        name="date"
        id="date"
        placeholder="Insert Date"
        onChange={handleInputChange}
        value={data.date}
      />
      <input type="submit" value="Send" disabled={btnDisabled} />
    </form>
    </div>
  )
}

export default Form