import {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { insertBook } from './Store/bookslice'
import { useSelector } from 'react-redux';

const Addform = () => {
  const dispatch = useDispatch();
  // select auth state to use submit button disabled (init value is ture)
  let isLoading = useSelector((state) => state.state.stateAuth)


  // use ref defention
  let titleRef = useRef(null)
  let priceRef = useRef(null)
  let descriptionRef = useRef(null)
  
  let formHandler =(e) => {
    let addbook = {
      "title" : titleRef.current.value,
      "price" : priceRef.current.value,
      "description" : descriptionRef.current.value,
    }
    // get value form input and set in object 
    // e.preventDefault();
    dispatch(insertBook(addbook));
    // post addbook to store across dispatch(insertBook)
    // clear form values
    titleRef.current.value = null
    priceRef.current.value = null
    descriptionRef.current.value = null
  }

  return (
    
      <div className='col-lg-4 col-sm-12'>
        <h2>Insert Book</h2>
        <form onSubmit={()=>formHandler()}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required ref={titleRef} placeholder='Book Title Here'/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={priceRef} placeholder='Book Price Here'/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description' >Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              ref={descriptionRef}
              placeholder='Book Description Here'
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary mt-3' disabled={isLoading}>
            Add Book
          </button>
          <button type="reset" className='btn btnCancel mt-3 ms-2' disabled={isLoading}>
            Cancel
          </button>
        </form>
      </div>
   
  );
};

export default Addform;