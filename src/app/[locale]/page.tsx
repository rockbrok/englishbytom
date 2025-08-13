import { notFound } from 'next/navigation';

export default async function HomePage({ params }: any) {

  const { locale } = await params;

  try {
    const Content = (await import(`./${locale}.mdx`)).default;
    return <Content />;
  } catch (error) {
    notFound();
  }
}