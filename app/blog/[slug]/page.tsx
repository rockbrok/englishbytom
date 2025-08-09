import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import Image from "next/image";
import slugify from "slugify";
import Link from "next/link";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".docx"))
    .map((file) => {
      const name = file.replace(/\.docx$/, "");
      return { slug: slugify(name, { lower: true }) };
    });
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost(props: BlogPostProps) {
  const params = await props.params;
  const slug = params.slug;

  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  // Find the original filename by matching slugified name
  const matchedFile = files.find((file) => {
    const name = file.replace(/\.docx$/, "");
    return slugify(name, { lower: true }) === slug;
  });

  if (!matchedFile) {
    throw new Error("Post not found");
  }

  const filePath = path.join(contentDir, matchedFile);
  const fileBuffer = fs.readFileSync(filePath);

  const { value: text } = await mammoth.extractRawText({ buffer: fileBuffer });

  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const [title, date, author, tag, image, ...body] = lines;

  return (
    <article className="prose max-w-3xl mx-auto p-4">
      <h1>{title}</h1>
      <small>{date}</small> | <small>{author}</small> | <Link href={`tag/${slugify(tag, { lower: true })}`}>{tag}</Link>
      {image && (
        <div className="my-4">
          <Image src={image} alt={title} width={800} height={500} />
        </div>
      )}
      <div>
        {body.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </article>
  );
}
