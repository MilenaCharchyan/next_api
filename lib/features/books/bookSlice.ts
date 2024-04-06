import { createAppSlice } from "@/lib/createAppSlice";
import { IBook } from "@/type/type";
import { getBooksAPI } from "./bookAPI";

const initialState:{books:IBook[],book:IBook}={
    books:[],
    book:{} as IBook
}
export const bookSlice=createAppSlice({
    name:'books',
    initialState,
    reducers:(create)=>({
        getBooksData:create.asyncThunk(
            async()=>{
                return await getBooksAPI();
            },{
                fulfilled:(state,action)=>{
                    state.books=action.payload
                }

            }
        )
    }),
    selectors:{
        selectBooks:(app)=>app.books,
        selectBook:(app)=>app.book
    }
})

export const {getBooksData}=bookSlice.actions
export const {selectBook, selectBooks}=bookSlice.selectors