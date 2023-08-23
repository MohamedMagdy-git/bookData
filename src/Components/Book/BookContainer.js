import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../Store/bookslice';

import './book.css';

const PostContainer = () => {
  //  isLoading state boolean in store books still loading in pending ture 
  // in fullfill state change to false
  let  isLoading  = useSelector((state)=> state.books.isLoading);
  let isFullfill = useSelector((state)=> state.books.books);

  let dispatch = useDispatch();

  // to fair getbooks(asncthunk) to get response from api
  useEffect(
     () => {dispatch(getBooks())}
    , [dispatch]);


    let [clickedBook, SetClickedBook] = useState(null)

    let getBookfromlist = (book)=> {
     SetClickedBook(book)
     console.log(clickedBook);
    };
  return (
    <Fragment>
      {/* <hr className='my-5' /> */}
      
        <div className='col-lg-4 col-md-12 col-sm-12 mb-md-4 mb-sm-4'>
          <BooksList isLoading={isLoading} books={isFullfill} getBookfromlist ={getBookfromlist}/>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12' >
          <BookInfo clickedBook={clickedBook}/>
        </div>
      
    </Fragment>
  );
};

export default PostContainer;