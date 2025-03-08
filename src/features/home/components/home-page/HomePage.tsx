import { NextPage } from "next";
import { Navbar } from "@/components/ui/navbar";
import { NavbarLink } from "@/components/ui/navbar/Navbar";

export const HomePage: NextPage = () => {
  return (
    <Navbar>
      <NavbarLink href="/">Brevity</NavbarLink>
    </Navbar>
  );
};
