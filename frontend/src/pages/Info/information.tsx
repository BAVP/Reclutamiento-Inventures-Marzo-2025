import { ClicksTable } from "./clickTable";
import { ClickData } from "./overview";

export function Information(props: { clicks: ClickData[] | null }) {
  return (
    <div>
      <ClicksTable clicks={props.clicks} />
    </div>
  );
}
