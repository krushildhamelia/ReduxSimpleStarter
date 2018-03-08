import React from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_details';

export default function(){
    return (
        <div className="redux">
            <BookList />
            <BookDetail />
        </div>
    );
}