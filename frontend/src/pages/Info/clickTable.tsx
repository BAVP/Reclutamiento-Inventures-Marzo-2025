import { ClicksTableEntry } from "./clickTableEntry";
import { ClickData } from "./overview";

export interface ClicksTableProps {
  clicks: ClickData[];
}

export function ClicksTable(props: { clicks: ClickData[] | null }) {
  return (
    <div className="w-full mt-4">
      <div className="font-bold mb-2">Clicks Information</div>
      <div className="flex flex-col space-y-4 overflow-auto max-h-[400px]">
        {props.clicks?.length ? (
          props.clicks.map((click: ClickData, index) => (
            <ClicksTableEntry key={index} data={click} />
          ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </div>
  );
}
