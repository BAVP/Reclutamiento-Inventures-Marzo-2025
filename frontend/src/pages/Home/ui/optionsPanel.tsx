export function OptionsPanel(props: {
  onChange: any;
  value: any;
  open: Boolean;
}) {
  if (!props.open) return <></>;
  return (
    <>
      <div className="w-[90%] mx-auto">
        <label className="text-lg">Custom Sufix</label>
        <div className="flex items-center">
          <div className=" w-4/5 flex items-center border-b border-teal-500 dark:border-red-500 py-2 mx-auto text-black dark:text-white">
            <div>
              <p>http://localhost:5173.com/</p>
            </div>
            <input
              className="appearance-none bg-transparent border-none text-gray-600 dark:text-white mr-3 py-1 pr-2 leading-tight focus:outline-none"
              value={props.value}
              type="text"
              placeholder="MyBirthday"
              aria-label="SUFIX"
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
