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
      <section className="antialiased mx-4 md:w-5/6 lg:w-3/6 md:mx-auto">
        <h1 className="text-center text-lg md:text-2xl">
          Software Development Engineer in Test, Consultant, Maker.
        </h1>
        <p className="text-center mt-8 text-lg md:text-xl">
          I{" "}
          <Link href="https://www.malt.fr/profile/didierjulian">
            <a>help</a>
          </Link>{" "}
          companies to design fast and reliable testing solutions and build web
          services in Rust. I also develop tools and systems for vertical
          farming and during my free time I make video games.
          <br />
          Available on{" "}
          <Link href="https://github.com/theredfish">
            <a>Github</a>
          </Link>{" "}
          and{" "}
          <Link href="https://twitter.com/theredfi_sh">
            <a>Twitter</a>
          </Link>
          .
        </p>
      </section>

      <section className="antialiased mx-4 md:w-5/6 lg:w-3/6 md:mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl">Blog posts</h2>
        <ul className="mt-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-3">
              <Link href={`/posts/${id}`}>
                <a className="text-lg md:text-xl">{title}</a>
              </Link>
              <br />
              <span className="text-base md:text-lg">
                <Date dateString={date} />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
