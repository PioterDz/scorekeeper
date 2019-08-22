import React from 'react';
import '../AddPlayer/AddPlayer.css';
import './ChangeFactor.css';

const ChangeFactor = (props) => {

    let inputFactor;

    const onChangeFactor = (event) => {
        event.preventDefault();
        props.onChangeFactor(inputFactor.value);
        inputFactor.value = '';
    }

    return (
        <form className="ChangeFactor" onSubmit={onChangeFactor}>
            <input type="text" className="AddPlayer__input" ref={node => inputFactor = node} />
            <input type="submit" className="AddPlayer__submit" value="Change Factor" />
        </form>
    )
}

export default ChangeFactor;