import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const handleTextChange = (event) => {
  setText(event.target.value);
};
  const handleSubmit = (event) =>{
    if(text.length){event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
    props.addThought(thought);
    setText('');
}
  }
  const [text, setText] = useState('');

  return (
    <form className="AddThoughtForm"  onSubmit = {handleSubmit}>
      <input
        onChange={handleTextChange}
        value = {text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
