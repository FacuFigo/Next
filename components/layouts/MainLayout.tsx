import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Course Page</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};
