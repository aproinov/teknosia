import Head from "next/head";
import Navigation from "./Navigation";
import Copyright from "./Copyright";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fff" />
        <link href="https://fonts.googleapis.com/css?family=Righteous%7CMerriweather:300,300i,400,400i,700,700i" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="() => { anonymous }" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <footer className={"footer"}>
        <Copyright />
      </footer>
      <style jsx>
        {`
          nav {
            height: 80px;
          }
          .footer {
            margin-top: 30px;
            padding: 20px 0;
          }
          main {
            max-width: 800px;
            margin: 0 auto;
          }
          // .root {
          //   display: block;
          //   padding: 4rem 0;
          //   box-sizing: border-box;
          //   height: 100%;
          // }
          // main {
          //   display: flex;
          //   min-height: 100%;
          // }
          // @media (min-width: 769px) {
          //   .root {
          //     display: flex;
          //     flex: 1 0 auto;
          //   }
          //   main {
          //     flex: 1 0 auto;
          //   }
          // }
        `}
      </style>
    </div>
  );
}
