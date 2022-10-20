import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" }, 
    { rel: "preconnect", href: "https://fonts.gstatic.com" }, 
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=IBM+Plex+Serif:ital,wght@0,500;1,300&display=swap" }, 
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "ripe / nounish builder profile ⌐◨-◨" ,
  viewport: "width=device-width,initial-scale=1",
  "og:image": "/share.png", 
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}