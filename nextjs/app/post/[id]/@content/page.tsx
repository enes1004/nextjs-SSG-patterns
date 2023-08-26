import { LARAVEL_API } from "@/config/laravel_api";

type PostProps = {
  title: string;
  content: string;
  author: string;
  id: number;
};

export function generateStaticParams() {
  return [{ id: 1 }];
}

export default async function Post({
  params: { id },
}: {
  params: { id: number };
}) {
  const data: PostProps = await fetch(`${LARAVEL_API}/api/post/${id}`).then(
    (res) => res.json(),
  );
  const { title, author, content } = data;
  return (
    <>
      <h1>
        {title} #{id}
      </h1>
      <h3>by {author}</h3>
      {content}
    </>
  );
}
