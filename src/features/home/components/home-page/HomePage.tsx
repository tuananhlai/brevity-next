import { NextPage } from "next";
import Link from "next/link";
import { LuArrowRight, LuLogIn } from "react-icons/lu";
import { Navbar, NavbarLink, NavbarSpacer } from "@/components/navbar";
import { LinkButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { BlogCard, BlogCardProps } from "../blog-card";
import styles from "./HomePage.module.scss";

export const HomePage: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <Navbar>
          <Link className={styles.logo} href="/">
            Brevity
          </Link>
          <NavbarSpacer />
          <LoginLink />
        </Navbar>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <Heading level={2}>Newest Posts</Heading>
          <div className={styles.blogs}>
            {mockData.map((props, index) => (
              <div key={index} className={styles.blogCard}>
                <BlogCard {...props} />
              </div>
            ))}
          </div>
          <div className={styles.readMoreContainer}>
            <LinkButton variant="tertiary" href="/blog/newest">
              View all
              <LuArrowRight />
            </LinkButton>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

const mockData: BlogCardProps[] = [
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 1),
    title: "Blog Title",
  },
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 30),
    title: "Blog Title",
  },
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 30),
    title: "Blog Title",
  },
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 30),
    title: "Blog Title",
  },
];

const LoginLink = () => {
  const href = "/login";
  return (
    <>
      <NavbarLink className={styles.loginLink} href={href}>
        Sign in
        <LuLogIn />
      </NavbarLink>
      <NavbarLink
        className={styles.mobileLoginLink}
        href={href}
        aria-label="Sign in"
      >
        <LuLogIn />
      </NavbarLink>
    </>
  );
};
