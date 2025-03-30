export function ClicksTableEntry({ data }: { data: any }) {
  const isp = data.isp || "Unknown";
  const ip = data.ip || "Unknown";
  const country = data.country || "Unknown";
  const region = data.region || "Unknown";
  const city = data.city || "Unknown";
  const lat = data.lat || "Unknown";
  const lon = data.lon || "Unknown";
  const timestamp = data.timestamp
    ? new Date(data.timestamp).toLocaleString()
    : "Unknown";

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 mt-4 mx-1 py-3 shadow-xl rounded">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="py-2 px-4 border-b text-left">Field</th>
            <th className="py-2 px-4 border-b text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-800">
            <td className="py-2 px-4 border-b">ISP</td>
            <td className="py-2 px-4 border-b">{isp}</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-700">
            <td className="py-2 px-4 border-b">IP Address</td>
            <td className="py-2 px-4 border-b">{ip}</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <td className="py-2 px-4 border-b">Country</td>
            <td className="py-2 px-4 border-b">{country}</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-700">
            <td className="py-2 px-4 border-b">Region</td>
            <td className="py-2 px-4 border-b">{region}</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <td className="py-2 px-4 border-b">City</td>
            <td className="py-2 px-4 border-b">{city}</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-700">
            <td className="py-2 px-4 border-b">Latitude</td>
            <td className="py-2 px-4 border-b">{lat}</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <td className="py-2 px-4 border-b">Longitude</td>
            <td className="py-2 px-4 border-b">{lon}</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-700">
            <td className="py-2 px-4 border-b">Timestamp</td>
            <td className="py-2 px-4 border-b">{timestamp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
