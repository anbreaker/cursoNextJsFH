import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO About Page Title',
  description: 'SEO About Page Description',
  keywords: ['About Page', 'anbreaker', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
};

export default function AboutPage() {
  return (
    <>
      <h2 className='text-3xl mt-8'>About Page</h2>
    </>
  );
}
