import { useState } from "react";
import { Button } from "../../components/ui/Button";
import { searchUrl } from "../../api/url";
import { Table } from "./urlTable";

export function Search(props: { onSearch: any }) {
  const [sufix, setSufix] = useState(""); // To store sufix searched
  const [data, setData] = useState<{
    _id: String;
    url: String;
    sufix: String;
    clicks: Number;
    createdAt: String;
  } | null>(null); // To store data about that url
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update sufix state
  const handleChange = (e: any) => {
    setSufix(e.target.value);
  };

  // Fetch data
  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    setData(null);
    fetch(searchUrl(sufix), {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        props.onSearch(data.clicksInformation);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        props.onSearch([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Search
  const handleSearch = (e: any) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div>
      <label className="text-lg">Custom Sufix</label>
      <div className="flex items-center border-b border-teal-500 dark:border-red-500 py-2 mx-auto text-black dark:text-white">
        <div>
          <p>{window.location.origin}/</p>
        </div>
        <input
          className="appearance-none bg-transparent border-none text-gray-600 dark:text-white mr-3 py-1 pr-2 leading-tight focus:outline-none"
          value={sufix}
          type="text"
          placeholder="MyBirthday"
          aria-label="SUFIX"
          onChange={handleChange}
        />
        <Button onClick={handleSearch} text={"Search"} />
      </div>
      <div>
        Resultado:{" "}
        {isLoading ? (
          "Loading..."
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : data ? (
          <Table data={data} />
        ) : (
          "No data available"
        )}
      </div>
    </div>
  );
}
