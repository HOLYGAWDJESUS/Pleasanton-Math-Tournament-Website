import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[90px] pb-24 w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
