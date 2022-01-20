import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Julian Didier";
const siteTitle = "theredfi.sh";
const siteDescription = "Written material by theredfi.sh.";
const siteUrl = "https://theredfi.sh";
const siteImage = "/android-chrome-512x512.png";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{siteTitle}</title>

        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={siteTitle} key="og_title" />
        <meta property="og:url" content={siteUrl} key="og_url" />
        <meta
          property="og:description"
          content={siteDescription}
          key="og_descr"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@theredfi_sh" />
        <meta property="twitter:url" content={siteUrl} key="twitter_url" />
        <meta
          property="twitter:title"
          content={siteTitle}
          key="twitter_title"
        />
        <meta
          property="twitter:description"
          content={siteDescription}
          key="twitter_descr"
        />
        <meta property="twitter:image" content={siteImage} />
      </Head>
      <header>
        {home && (
          <>
            <div className="mx-auto w-2/5 my-5">
              <div className="relative h-32 w-32 md:h-52 md:w-52 mx-auto">
                <Image
                  priority
                  src="/images/profile.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt={name}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-2xl text-center font-bold mt-2">{name}</h1>
            </div>
          </>
        )}
      </header>

      <main className="">
        {!home && (
          <div className="pt-16 pl-5 md:pl-0 md:max-w-3xl md:mx-auto">
            <Link href="/">
              <a className="rounded ring-1 ring-zinc-400 hover:ring-zinc-500 py-2 px-4">
                ← Go back
              </a>
            </Link>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
