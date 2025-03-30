import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 w-full h-[100vh] m-0">
        <Header />
        {children}
      </div>
    </>
  );
}
