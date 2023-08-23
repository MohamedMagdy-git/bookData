import React, { Fragment } from 'react';
import Header from "./Components/Header";
import AddForm from './Components/addForm';
import BookContainer from './Components/Book/BookContainer';
import Footer from './Components/Footer';
// import { useSelector } from 'react-redux/es/hooks/useSelector';


const App = () => {
  // let globalState = useSelector((state)=> state)
  // // console.log(globalState.books.books)

  return (
    <Fragment>
      <Header />
      <div className='container mt-4'>
        <div className='row'>
        <AddForm />
        <BookContainer />
        </div>
        <Footer className= 'mt-5'/>
      </div>
    </Fragment>
  );
};

export default App;