import Date from "@components/date";
import "@styles/shades-of-purple.css";

type PostLayoutProps = {
  post: Post;
};

export type Post = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
  description: string;
  image: string;
};

const PostLayout = ({ post }: PostLayoutProps) => {
  return (
    <article className="relative w-full lg:mx-auto lg:max-w-4xl px-5 bg-none pt-8 lg:pb-5">
      <div className="prose prose-zinc prose-a:text-red-400 prose-a:hover:to-red-500 prose-a:no-underline prose-h1:text-4xl prose-md lg:prose-lg dark:prose-invert max-w-3xl mx-auto">
        <div>
          <Date dateString={post.date} />
        </div>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-pink-400 to-orange-500 py-2">
          {post.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    </article>
  );
};

export default PostLayout;
