import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === "/about" ? "active" : null}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a className={router.pathname === "/privacy" ? "active" : null}>Privacy</a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 100%;
            }
            
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: inline-flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                max-width: 800px;
                display: block;
                margin: 0 auto;
              }
              ul {
                opacity: 0.98;
                width: 100%;
                max-width: 800px;
                height: 33px;
                top: auto;
                display: inline-flex;
                transform: translateY(0);
                flex-direction: row;
                column-gap: 20px;
                border-bottom: 1px solid rgb(221 221 221 / 50%);
                margin-top: 0px;
                padding-top: 10px;
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
