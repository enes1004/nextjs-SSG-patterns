import { LARAVEL_API } from "@/config/laravel_api";
import { Suspense } from "react";
// export function generateStaticParams(){

// }

export default async function Layout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: number };
}) {
  const auth = await fetch(`${LARAVEL_API}/api/dummy_auth/post/${id}`).then(
    (res) => res.json(),
  );

  return (
    <>
      <header>認可ヘッダーです</header>
      <Suspense>{auth.ok ? children : "auth failed: " + auth.meesage}</Suspense>
    </>
  );
}
