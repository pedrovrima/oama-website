import Nav from "@includes/nav";
import Image from "next/image";
import Head from "next/head";
export default function Newsletter() {
  return (
    <div className="pb-32">
      <Head>
        <title>Assine a Newsletter</title>
      </Head>

      <Nav />
      <div className=" relative hero-small md:hero min-h-1/2">
        <div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
          <div className="absolute top-0 h-full w-full">
            <Image
              // className="h-32"
              src="/heros/apoie.jpg"
              layout="fill"
              //   width={"2000"}
              //   height={"1000"}
              objectFit="cover"
              objectPosition="center"
              priority={true}
            />
          </div>
        </div>
      </div>
      <iframe
        src="https://77b91d15.sibforms.com/serve/MUIEACnXp6W86QfIYk1wLkcJ-A6Zt042ZBaLT-llD8XILzzaCoFvBnRuR84Q3pLS_yIQWCfWYMnLa1Q6koCnPcqv4jw6b7fMkAoe7uTqU2IDi_cOQV9EoXIVlH5cNvu4uQEVzrbXkYpPKQ8hkrWr7hUczSJ3JhyL-tisfdAqRx0nyjnXPL0-AZ0z5Nid-5XorUu4Ys8GHh0Sy_NA"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style={{
          height: "100vh",
          width: "50vw",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%"
        }}
      />

      <div className="mt-16 flex items-center justify-center" />
    </div>
  );
}
