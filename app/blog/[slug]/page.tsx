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
    <article className="section">
      <div className="flex flex-col gap-0.5">
        <h3 className="h3">{title}</h3>
        <div className="flex flex-row justify-between items-center">
          <small>{date}</small>
          <Link href={`tag/${slugify(tag, { lower: true })}`}>{tag}</Link>
        </div>
        <small>{author}</small>
      </div>
      <div className="relative flex w-full h-[300px]">
        <Image
          src={image}
          style={{ objectFit: "cover" }}
          className="rounded-md"
          sizes="100vw"
          fill
          alt="Students at university"
        />
      </div>
      {body.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </article>
  );
}
