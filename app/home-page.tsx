import { getSortedPostsData } from "@app/core/posts";
import Image from "next/image";
import profilePic from "@app/me.jpg";
import Date from "@components/date";
import Link from "next/link";

const name = "Julian Didier";
const shortDescription = "Software developer, gamedev, solarpunk";

export default async function HomePage() {
  const posts = await getSortedPostsData();

  return (
    <>
      <header className="mx-4 md:w-5/6 lg:w-3/6 md:mx-auto mt-8">
        <div className="relative h-24 w-24 md:h-32 md:w-32">
          <Image
            src={profilePic}
            alt="Author's picture"
            priority
            placeholder="blur"
            fill
            sizes="400px"
            className="rounded-full"
          />
        </div>
        <h1 className="text-xl font-semibold mt-4">{name}</h1>
        <h2 className="text-lg">{shortDescription}</h2>
      </header>
      <section className="mx-4 md:w-5/6 lg:w-3/6 md:mx-auto">
        <div className="w-full md:w-5/6 md:max-w-3xl mt-8 text-base lg:text-lg">
          <p>
            I&apos;m currently busy with{" "}
            <a href="https://owlduty.com">Owl Duty</a>, a test platform
            I&apos;ve been waiting to build for a long time. I also make video
            games and related content that you can find on{" "}
            <a href="https://indiedevcasts.com">Indiedevcasts</a>. See my{" "}
            <a href="https://github.com/theredfish">Github</a> for open source
            stuff.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-base lg:text-xl font-semibold inline-flex items-start">
            Written material
            <Link
              href="/atom.xml"
              target="_blank"
              className="group inline-flex items-center ml-2 text-gray-100 text-sm"
            >
              (RSS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-gray-100 group-hover:fill-red-500 hover:cursor-pointer h-3 ml-2 mr-0.5"
              >
                <path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
              {"  "})
            </Link>
          </h2>
          <ul className="mt-4">
            {posts.map(({ id, date, title }) => (
              <li key={id} className="mb-3">
                <Link href={`/posts/${id}`} className="text-base lg:text-lg">
                  {title}
                </Link>
                <br />
                <span className="text-sm ">
                  <Date dateString={date} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
