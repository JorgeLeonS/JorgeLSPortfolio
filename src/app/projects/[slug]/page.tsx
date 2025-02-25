// app/projects/[slug]/page.tsx
import type { NextPage } from 'next';
import ClientProject from './ClientProject';

const Page: NextPage<any> = async function Page({ params }: any) {
  const { slug } = await Promise.resolve(params);
  return <ClientProject slug={slug} />;
};

export default Page;