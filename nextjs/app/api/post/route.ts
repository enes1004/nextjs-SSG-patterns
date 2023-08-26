import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET() {
   return NextResponse.json(data);
}

export type PostData={
   "id": number,
   "title": string,
   "content": string,
   "user_id": number,
   "created_at": string,
   "updated_at": string,
   "author": string,
   "user": {
     "id": number,
     "name": string,
     "email": string,
     "email_verified_at": string,
     "created_at": string,
     "updated_at": string
   }
 }