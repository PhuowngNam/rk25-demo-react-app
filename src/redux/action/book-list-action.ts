import {Book} from "../reducer/book-reducer";

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export type BookListActionType = {
    type: string,
    payload: any
}

export const addBook = (book: Book): BookListActionType => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const removeBook = (id: string): BookListActionType => {
    return {
        type: REMOVE_BOOK,
        payload: id
    }
}