import { Link } from "react-router-dom";

export function Header() {
  // Nav items
  const nav = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Info",
      href: "/info",
    },
  ] as const;

  // Nav items as list items
  const items = nav.map((item, i) => {
    return (
      <li key={i}>
        <Link
          className="text-teal-500 dark:text-red-500 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl hover:scale-[1.05] transition px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          to={item.href}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <header className="flex items-center">
        <a
          href="/"
          className="font-bold hover:cursor-pointer text-3xl mx-3 my-3"
        >
          SHORTY
        </a>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {items}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
