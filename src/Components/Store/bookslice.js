import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

export let getBooks = createAsyncThunk("book/getBooks", async (_, { rejectWithValue })=> {
   try{ 

        let response = await fetch("https://books-project.onrender.com/books");
        let data = response.json();
        console.log(data);
        return data
        
    }
    catch {
        return rejectWithValue("Error fetching books");
    }
})

// thunk to insert a book
export let insertBook = createAsyncThunk("book/insertBook", async (newBook, { rejectWithValue, getState })=> {
    try{
        newBook.userName = getState().state.name
         await fetch("https://books-project.onrender.com/books" ,{
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)});
    }
    catch {
        return rejectWithValue("Error fetching books");
    }
})

// thunk to delete a book
export let deleteBook = createAsyncThunk("book/deleteBook", async (book, {rejectWithValue})=>{
    try{
        
         await fetch(`https://books-project.onrender.com/books/${book.id}` ,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            });
        return book;
    }
    catch {
        return rejectWithValue("Error fetching books");
    }
})

export let bookslice = createSlice({
    name : 'book',
    initialState : {books : null, isLoading : false, isRejected : null},
    extraReducers : {
        // get books 
        [getBooks.pending] : (state , action) => {
            state.isLoading = true; 
        },
        [getBooks.fulfilled] : (state , action) => {
            state.isLoading = false; 
            state.books = action.payload;
        },
        [getBooks.rejected] : (state , action) => {
            state.isLoading = false; 
            state.isRejected = action.payload;
            // if rejected set payload value ("Error fetching books") in state isRejected
            console.log(action);
        },
        // insert book
        [insertBook.pending] : (state , action) => {
            state.isLoading = true; 
        },
        [insertBook.fulfilled] : (state , action) => {
            state.isLoading = false; 
            state.books.push(action.payload);
        },
        [insertBook.rejected] : (state , action) => {
            state.isLoading = false; 
            state.isRejected = action.payload;
        },

        // delete book
        [deleteBook.pending] : (state , action) => {
            state.isLoading = true; 
        },
        [deleteBook.fulfilled] : (state , action) => {
            state.isLoading = false; 
            // filter book by id
            state.books = state.books.filter(el => el.id !== action.payload.id)
        },
        [deleteBook.rejected] : (state , action) => {
            state.isLoading = false; 
            state.isRejected = action.payload;
        }
    },
})


export default bookslice.actions;