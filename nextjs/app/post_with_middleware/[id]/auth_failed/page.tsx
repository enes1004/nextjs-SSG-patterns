import { LARAVEL_API } from "@/config/laravel_api";

export default async function FailedAuth({
  params: { id },
}: {
  params: { id: number };
}) {
  const auth = await fetch(`${LARAVEL_API}/api/dummy_auth/post/${id}`, {
    next: { revalidate: 1 },
  })
  .then((res) => res.json());

  return <>auth failed: {auth.reason}</>;
}
