import { Sidebar } from '../components/Sidebar';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white m-0'>
      <div className='flex'>
        <Sidebar />

        <div className='w-full text-slate-900'>{children}</div>
      </div>
    </div>
  );
}
