import type { Metadata } from "next";
import { AddBookPage } from "../components/AddBooksPage";

export default function IndexPage() {
  return (<AddBookPage/>)
}

export const metadata: Metadata = {
  title: "Add Book",
};
