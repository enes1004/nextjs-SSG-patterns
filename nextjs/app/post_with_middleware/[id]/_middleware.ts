import { LARAVEL_API } from "@/config/laravel_api";
import { NextRequest, NextResponse } from "next/server";

export default async function postAuthMiddleware(request:NextRequest){
    
    const idMatch = request.nextUrl.pathname.match(/post_with_middleware\/(?<id>[0-9]+)/);
    const id=idMatch?.groups?.id ?? null;
    if(!id){return NextResponse.next();}
    const auth = await fetch(`${LARAVEL_API}/api/dummy_auth/post/${id}`, {
        next: { revalidate: 0 },
      })
      .then((res) => res.json());
    if(auth.ok){
       return NextResponse.next();
    }
    return NextResponse.rewrite(new URL(request.nextUrl.pathname+'/auth_failed', request.url));
}