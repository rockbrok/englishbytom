import fs from "fs";
import path from "path";
import Link from "next/link";
import slugify from "slugify";

export default function BlogIndex() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((file) => file.endsWith(".docx"))
    .map((file) => {
      const name = file.replace(/\.docx$/, "");
      return {
        slug: slugify(name, { lower: true }),
        title: name,
      };
    });

  return (
    <section className="section">
      <h3 className="h3">Más recientes</h3>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug} className="my-2">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
