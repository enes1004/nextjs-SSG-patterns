import { LARAVEL_API } from "@/config/laravel_api";

type PostProps = {
  title: string;
  content: string;
  author: string;
  id: number;
};

export async function generateStaticParams() {
  const data: PostProps[] = await fetch(`${LARAVEL_API}/api/post/`).then(
    (res) => res.json(),
  );
  return data.map(({id}) => ({ id:id.toString() }));
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
