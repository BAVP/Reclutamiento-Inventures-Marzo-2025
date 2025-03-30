export function UrlResult(props: { url: String; sufix: String }) {
  if (props.sufix === "") return <></>;
  return (
    <div className="mt-6 w-4/5 mx-auto overflow-x-auto">
      <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
            <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Campo
            </th>
            <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Original URL
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {props.url}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              New URL
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {props.sufix}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
