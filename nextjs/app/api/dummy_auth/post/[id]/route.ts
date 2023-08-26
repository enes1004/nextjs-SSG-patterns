import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params: { id } }: { params: { id: number } },
  ) {
     return NextResponse.json(id<10?{ok:false,reason:"old content only viewable to admin"}:{ok:true});
}

export type PostAuthData={
  ok:boolean,
  reason?:string
}