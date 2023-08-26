import { LARAVEL_API } from "@/config/laravel_api";
import { Suspense } from "react";
export function generateStaticParams() {
  return [{ id: "1" }];
}

export default async function Layout({
  content,
  auth,
  params: { id },
}: {
  content: React.ReactNode;
  auth: React.ReactNode;
  params: { id: number };
}) {
  const authFB = await fetch(`${LARAVEL_API}/api/dummy_auth/post/${id}`, {
    // next: { revalidate: 1 },
  }).then((res) => res.json());

  return (
    <>
      <header>認可ヘッダーです</header>
      {authFB.ok ? content : auth}
    </>
  );
}
