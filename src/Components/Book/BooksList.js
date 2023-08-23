import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from "../Store/bookslice"

const BooksList = ({isLoading, books, getBookfromlist}) => {

  let dispatch = useDispatch()
  // select auth state to use submit button disabled (init value is ture)
  let islogin= useSelector((state) => state.state.stateAuth)


  // map books array of object
  let booklists = books 
   ?
    books.map((book)=> (
    <li className='list-group-item d-flex  justify-content-between align-items-center' key={book.id}>
        <div className='fw-bold'>{book.title}</div>
        <div className='' role='group'>
          <button type='button' onClick={() => getBookfromlist(book)} className='btnRead btn' disabled={islogin}>
            Read
          </button>
          {/* dispatch delete and log(book has deleted) */}
          <button type='button' onClick={()=>dispatch(deleteBook(book)).then((data)=>{ console.log(data.payload); })} className='btn btnDelete' disabled={islogin}>
            Delete
          </button>
        </div>
      </li>




)) : "there is no books";



  

  return (
    <div>
      <h2>Books List</h2>
      {/* is loading ture still in painding state loading fullfiled(false) show data */}
      {isLoading ? 
      <div style={{color : "red"}}>
        loading ...
      </div> 
      :<ul className='list-group'>
        {booklists}
      </ul> }
    
  
    </div>
  );
};

export default BooksList;