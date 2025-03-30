import { Information } from "./information";
import { Search } from "./search";

export function Overview() {
  return (
    <div className="flex mx-auto w-3/4 shadow-2xl h-[80vh] text-teal-500 dark:text-red-500">
      <div className="w-1/2 px-3 py-3">
        <Search />
      </div>
      <div className="w-1/2 px-3 py-3">
        <Information />
      </div>
    </div>
  );
}
