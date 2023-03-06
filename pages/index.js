import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className="w-full md:w-5/6 md:max-w-3xl mt-8">
        <p>
          I'm currently busy with <a href="https://owlduty.com">Owl Duty</a>, a
          test platform I've been waiting to build for a long time. I also make
          video games and related content that you can find on{" "}
          <a href="https://indiedevcasts.com">Indiedevcasts</a>. See my{" "}
          <a href="https://github.com/theredfish">Github</a> for open source
          stuff.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-base lg:text-lg font-semibold">Posts</h2>
        <ul className="mt-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-3">
              <Link href={`/posts/${id}`}>
                <a className="text-base lg:text-lg ">{title}</a>
              </Link>
              <br />
              <span className="text-sm ">
                <Date dateString={date} />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
