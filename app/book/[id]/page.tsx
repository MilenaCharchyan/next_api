import { DetailsBookPage } from "@/app/components/DetailsBookPage";
import type { Metadata } from "next";

export default function IndexPage({params:{id}}:{params:{id:number}}) {
  return (<DetailsBookPage id={id}/>)
}

export const metadata: Metadata = {
  title: "Details Book",
};
