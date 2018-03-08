//Action : returns a object with two keys;
// one is type == on this bases all the reducers return new/old state
// second is payload == on this bases reducers react
export function selectBook(book){
    return {
        type: "BOOK_SELECTED",
        payload : book
    }    
}