import { combineReducers }  from 'redux';
import BookReducer from './reducer_book';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books : BookReducer,
    activeBook : ActiveBook
});

export default rootReducer;