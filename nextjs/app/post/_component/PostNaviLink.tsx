import Link from "next/link";

export type PostNaviLinkProps = {
  title: string;
  author: string;
  id: number;
};

const PostNaviLink: React.FC<PostNaviLinkProps> = ({ title, author, id }) => {
  return (
    <Link href={`/post/${id}`}>
      <h4>{title}</h4>
      <h6>by {author}</h6>
    </Link>
  );
};

export default PostNaviLink;
