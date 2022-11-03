import {ADD_BOOK, BookListActionType, REMOVE_BOOK} from "../action/book-list-action";

export type Book = {
    id: string,
    name: string
}

const initState: {
    bookList: Book[] | []
} = {
    bookList: []
}

export const bookListReducer = (state = initState, action: BookListActionType) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                bookList: [...state.bookList, action.payload]
            };
        case REMOVE_BOOK:
            return state;
            // return {
            //     ...state,
            //     counter: state.counter - action.payload
            // };
        default:
            return state;
    }
}