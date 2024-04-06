"use client";

import { getBooksData, selectBooks } from "@/lib/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useEffect } from "react";
import "@/app/styles/show.scss"
export const ShowBooksPage = () => {
    const books = useAppSelector(selectBooks);
    const dispatch = useAppDispatch();
    console.log(books);
    
    useEffect(()=>{
        dispatch(getBooksData(''))
    }, [])
    return (
        <div>
            <div className="show">
                {
                    books.map(elm=>{
                        return(
                            <div className="show-book" key={elm.id}>
                                <h4>{elm.title}</h4>
                                <p>{elm.author}</p>
                                <img src={elm.picUrl}  alt="" />
                                <Link href={"/book/"+elm.id}>see</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}