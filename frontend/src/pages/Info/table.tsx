export function Table({ data }: { data: any }) {
  return (
    <div className="mt-6 overflow-x-auto">
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
              Identificador
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {data._id}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Url real
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {data.url}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Url acortada
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {data.sufix}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Clicks dados
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {data.clicks}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">
              Tiempo restante
            </td>
            <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-black dark:text-white">
              {data.createdAt}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
