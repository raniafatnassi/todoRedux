import React, {useState} from 'react';
import './styles.css';

import { connect, useDispatch, useSelector } from 'react-redux';

import{
    add,
    supprimer,
    edit,
    complete,
    annulEdit,
    save
} from './actions/todoActions';

const Todo = () => {
    const [text, setText] = useState("");
    
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todoReducer.todos);
    
    const [inputText, setInputText] = useState(todos.text);

    return (
        <div>
            <div className="input-sec">

                <input
                    className="input-text"
                    type="text"
                    placeholder="enter you todo item"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button className="btn-input"
                        onClick={() => dispatch(add(text))} >
                    Add
                </button>
            </div>

            {todos.edited? (
            <div className="todo-item">
                <input
                className="todo-item-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                />

            <div className="todo-item-inputs">
                <button
                    className="todo-item-btn"
                    onClick={() => dispatch(save(inputText))}
                >
                {" "}
                save{" "}
                </button>
                <button
                    className="todo-item-btn"
                    onClick={() => dispatch(annulEdit(todos.id))}
                >
                annuler
                </button>
            </div>
        </div>
            ): (
        <div className="todo-item">
          {/* <div className="todo-item-inputs"> */}
            <input
                className="todo-item-text"
                type="checkbox"
                onClick={dispatch(complete())}
            />
            <p style={todos.isCompleted ? { textDecoration: "line-through" } : {}}>
                {" "}
                {todos.text}{" "}
            </p>
            <div className="todo-item-inputs">
                <button className="todo-item-btn" onClick={dispatch(supprimer())}>
                {" "}
                delete{" "}
                </button>
                <button className="todo-item-btn" onClick={dispatch(edit())}>
                    edit
                </button>
            </div>
        </div>
        )}
    </div>
    )
}

export default Todo
