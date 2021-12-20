

const initialState = {
    books: [
        {
            id: 1,
            title: 'Harry Potter 1',
            price: 500
        },
        {
            id: 2,
            title: 'Harry Potter 2',
            price: 700
        }
    ]
};
function MyReducer(state = initialState, action) {
    switch (action.type) {
        case "LIST" :
            return state.books
        case "ADDBOOK":
            console.log(action.payload);
            const newBook = []
            newBook.push(action.payload)
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        default:
            return state;
    }
}
export default MyReducer
