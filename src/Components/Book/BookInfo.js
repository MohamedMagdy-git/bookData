import React, { Fragment } from 'react';
import "../../index.css"

const BookInfo = ({clickedBook}) => {

  let selectedBook = clickedBook ?
    <div className='DescriptionInfo'>
        <p className=''><span className='fw-bold'>Book Title:</span> {clickedBook.title}</p>
        <p className=''><span  className='fw-bold'>Author:</span> {clickedBook.userName}</p>
        <p className=''><span  className='fw-bold'>Description:</span> {clickedBook.description}</p>
        <p className='fst-italic'><span  className='fw-bold'>Price:</span> {clickedBook.price}</p>
      </div>
   : 
        <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div>
  
  return (
    <Fragment>
      <h2>Book Details</h2>
     
      {selectedBook}
  
    </Fragment>
  );
};

export default BookInfo;