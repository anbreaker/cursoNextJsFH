import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Contact Page Title',
  description: 'SEO Contact Page Description',
  keywords: ['Contact Page Description', 'anbreaker', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
};

export default function contactPage() {
  return (
    <>
      <h2 className='text-3xl mt-8'>Contact Page</h2>
    </>
  );
}
