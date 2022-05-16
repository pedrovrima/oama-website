import Nav from "@includes/nav";
import Image from "next/image";
import Hero from "../components/hero";
import Actions from "../components/actions";
import About from "../components/about";
import Head from "next/head";
import Footer from "@includes/footer";
import useTranslation from "next-translate/useTranslation";

export default function IndexPage() {
  const {t} = useTranslation("home");
  return (
    <>
      <h1 className={"font-bold"}>{t("title")}</h1>
      <Nav />
      <Hero></Hero>
      <About t={t}></About>
      <Actions t={t}></Actions>
      <Footer></Footer>
    </>
  );
}
