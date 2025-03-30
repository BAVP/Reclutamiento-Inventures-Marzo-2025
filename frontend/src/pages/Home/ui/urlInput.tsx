import { Button } from "../../../components/ui/Button";

export function UrlInput(props: { onChange: any; onClick: any; value: any }) {
  return (
    <>
      <div className=" w-4/5 flex items-center border-b border-teal-500 dark:border-red-500 py-2 mx-auto text-black dark:text-white">
        <input
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={props.value}
          placeholder="https://google.cl"
          aria-label="URL"
          onChange={props.onChange}
        />
        <Button onClick={props.onClick} text={"Cut"} />
      </div>
    </>
  );
}
