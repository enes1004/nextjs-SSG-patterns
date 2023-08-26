'use client';
import { PostAuthData } from "@/app/api/dummy_auth/post/[id]/route";
import { LARAVEL_API } from "@/config/laravel_api";
import axios from "axios";
import { useEffect, useState } from "react";
export function generateStaticParams() {
  return [{ id: "1" }];
}

export default function Layout({
  content,
  auth,
  params: { id },
}: {
  content: React.ReactNode;
  auth: React.ReactNode;
  params: { id: number };
}) {
  const [authFB,setAuthFb] = useState<PostAuthData>();
  useEffect(()=>{
    axios.get(`${LARAVEL_API}/api/dummy_auth/post/${id}`).then(res=>res.data).then(data=>
      setAuthFb(data)
      )
  },[id])

  return (
    <>
      <header>認可ヘッダーです</header>
      {authFB ? (authFB.ok ? content : auth) :'loading'}
    </>
  );
}
