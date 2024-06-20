import { CartCounter } from '@/shopping-cart';

export const metadata = {
  title: 'Counter Page',
  description: 'Counter Page',
};

export default function CounterPage() {
  return (
    <div className='bg-slate-400 flex flex-col items-center justify-center w-full h-full'>
      <CartCounter value={10} />
    </div>
  );
}
