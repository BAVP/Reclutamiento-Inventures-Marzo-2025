import { useState } from "react";

export function LinkForm() {
  const [url, setUrl] = useState("");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleClickOptions = (e: any) => {
    e.preventDefault();
    setIsOptionsOpen((state) => !state);
  };

  const handleUrlChange = (e: any) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    console.log(url);
  };

  return (
    <>
      <form className="w-full max-w-sm w-4/5 mx-auto py-[3rem] flex flex-col gap-6">
        <div>
          <p className="text-3xl text-center text-white">Acortador de links</p>
        </div>
        <div className="flex items-center border-b border-teal-500 py-2 mx-auto w-[100%] text-white">
          <input
            className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="https://google.cl"
            aria-label="URL"
            onChange={handleUrlChange}
          />
          <button
            className="cursor-pointer flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Cut
          </button>
        </div>
        <div className="mx-auto">
          <button
            onClick={handleClickOptions}
            className="cursor-pointer flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            <p>Advanced Options</p>
          </button>
        </div>
      </form>
    </>
  );
}
