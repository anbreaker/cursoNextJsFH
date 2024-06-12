import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Pricing Page Title',
  description: 'SEO Pricing Page Description',
  keywords: ['Pricing Page Description', 'anbreaker', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
};

export default function pricingPagetPage() {
  return (
    <>
      <h2 className='text-3xl mt-8'>Pricing Page</h2>
    </>
  );
}
