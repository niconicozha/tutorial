export interface Blog {
  frontmatter: {
    layout: string;
    title: string;
    author: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    pubDate: Date;
    tags: string[];
  };
  url: string;
}
