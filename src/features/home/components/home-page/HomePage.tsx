import { NextPage } from "next";
import { Heading } from "react-aria-components";
import { Navbar } from "@/components/ui/navbar";
import { NavbarLink, NavbarSpacer } from "@/components/ui/navbar/Navbar";
import { BlogCard, BlogCardProps } from "../blog-card";
import styles from "./HomePage.module.scss";

export const HomePage: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <Navbar>
          <NavbarLink href="/">Brevity</NavbarLink>
          <NavbarSpacer />
          <NavbarLink href="/login">Login / Sign Up</NavbarLink>
        </Navbar>
      </header>
      <main>
        <section className={styles.section}>
          <Heading className={styles.sectionTitle} level={2}>
            Newest Posts
          </Heading>
          <div className={styles.blogs}>
            {mockData.map((props, index) => (
              <div key={index} className={styles.blogCard}>
                <BlogCard {...props} />
              </div>
            ))}
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
