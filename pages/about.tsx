import { MainLayout } from "@/components/layouts/MainLayout";
import { DarkLayout } from "@/components/layouts/DarkLayout";
import { ReactElement } from "react";

export default function AboutPage() {
  return (
    <>
      <div className={"center"}>
        <p>The info you need, here!</p>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
