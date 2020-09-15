import {
    ADD,
    DELETE,
    EDIT, 
    COMPLETE,
    ANNULEDIT,
    SAVE
} from '../constants/actionsTypes';

const initialState = {
    todos : [{ text: "mohamed", id: 0, isCompleted: false, isEdited: false },
    { text: "karim", id: 1, isCompleted: false, isEdited: false }]
}

const todoReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD:
            return { ...state, 
                todos: [
                    ...state.todos,
                    {
                        text: action.text
                    }
                    ]
                };
        case DELETE:
            return{ ...state.todos.filter((todo) => todo.id != action.id) };
        case EDIT: 
            return { ...state.todos.map(
                (todo) => todo.id === action.id? { ...todo, isEdited: !todo.isEdited} : todo
            ) };
        case COMPLETE:
            return {...state.todos.map(
                (todo) => todo.id === action.id? { ...todo, isCompleted: !todo.isCompleted} : todo
            )};
        case ANNULEDIT:
            return { ...state.todos.map(
                (todo) => todo.id === action.id? { ...todo, isEdited : !todo.isEdited } : todo
            )
            };
        case SAVE:
            return { ...state.todos.map(
                (todo) => todo.id === action.id? {...todo, text : action.editedText, edited: false} : todo
            )
            };
        default:
            return state;
        
    };
}

export default todoReducer;
