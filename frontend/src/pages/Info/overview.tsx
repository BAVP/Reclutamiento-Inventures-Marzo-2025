import { useState } from "react";
import { Information } from "./information";
import { Search } from "./search";

export interface ClickData {
  isp: string;
  ip: string;
  country: string;
  region: string;
  city: string;
  lat: string;
  lon: string;
  timestamp: Date;
}

export function Overview() {
  const [clicks, setClicks] = useState<ClickData[] | null>(null);
  const updateClicks = (clicks: ClickData[]) => {
    setClicks(clicks);
  };
  return (
    <div className="flex mx-auto w-3/4 shadow-2xl h-[80vh] text-teal-500 dark:text-red-500">
      <div className="w-2/3 px-3 py-3">
        <Search onSearch={updateClicks} />
      </div>
      <div className="w-1/3 px-3 py-3">
        <Information clicks={clicks} />
      </div>
    </div>
  );
}
