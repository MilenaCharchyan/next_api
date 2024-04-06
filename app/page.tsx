import type { Metadata } from "next";
import { ShowBooksPage } from "./components/ShowBooksPage";

export default function IndexPage() {
  return (<ShowBooksPage/>)
}

export const metadata: Metadata = {
  title: "Show Book",
};
