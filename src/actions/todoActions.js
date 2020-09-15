import {
    ADD,
    DELETE,
    EDIT, 
    COMPLETE,
    ANNULEDIT,
    SAVE
} from '../constants/actionsTypes';

export const add = (text) => {
    return {
        type : ADD,
        text  // In which the reducer takes and manipulates the data
    };
};

export const supprimer = (id) => {
    return {
        type : DELETE,
        id
    };
};

export const edit = (id) => {
    return {
        type : EDIT,
        id
    };
};

export const complete = (id) => {
    return {
        type : COMPLETE,
        id
    };
};

export const annulEdit = (id) => {
    return {
        type : ANNULEDIT,
        id
    };
};

export const save = (id, editedText) => {
    return {
        type : SAVE,
        id, 
        editedText
    }
}
