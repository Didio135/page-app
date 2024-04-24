"use client";
import { CreateAccount } from "@/app/components/create_account";
import { Destinations } from "@/app/components/destinations";
import Footer from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { AboutUsService } from "@/app/components/photos_section";
import { StatsNumberSections } from "@/app/components/stats_numbers";

const HomePage = () => {
  return (
    <>
      <Header />
      <Destinations />
      <CreateAccount />
      <AboutUsService />
      <StatsNumberSections />
      <Footer />
    </>
  );
};

export default HomePage;
