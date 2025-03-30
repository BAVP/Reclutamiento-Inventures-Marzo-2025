import { useState } from "react";
import { BASE_URL } from "../../../api/url";
import { UrlResult } from "./urlResult";
import { Button } from "../../../components/ui/Button";
import { OptionsPanel } from "./optionsPanel";
import { InputErrors } from "../../../components/forms/inputErrors";
import { UrlInput } from "./urlInput";

export function UrlForm() {
  const [url, setUrl] = useState(""); // Store url to cut
  const [desiredSufix, setDesiredSufix] = useState(""); // Store desired sufix by user
  const [assignedSufix, setAssignedSufix] = useState(""); // Store the sufix selected by backend
  const [isOptionsOpen, setIsOptionsOpen] = useState(false); // Open / Close options panel
  const [urlErrors, setUrlErrors] = useState<String[]>([]); // To store url errors during validation
  const [sufixErrors, setSufixErrors] = useState<String[]>([]); // To store sufix errors during validation

  // Open and close advanced options
  const handleToogleOptions = (e: any) => {
    e.preventDefault();
    setIsOptionsOpen((state) => !state);
    setSufixErrors([]);
  };

  // Validate url provided by user
  const handleUrlChange = (e: any) => {
    setUrl(e.target.value);
    validateUrl(e.target.value);
  };

  // Validate sufix provided by user
  const handleSufixChange = (e: any) => {
    setDesiredSufix(e.target.value);
    validateSufix(e.target.value);
  };

  // Cut url calling the backend.
  const handleCutUrl = (e: any) => {
    e.preventDefault();

    // Validation
    if (!validateUrl()) return;

    // Validate only if sufix is provided, and advanced options panel is open
    if (desiredSufix !== "" && isOptionsOpen && validateSufix()) return;
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        sufix: desiredSufix !== "" ? desiredSufix : null, // If no sufix is provided, backend will return an auto-gen sufix
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUrl = "http://localhost:5173/" + (data.sufix as String);
        setAssignedSufix(newUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Simple form validation
  const validateUrl = (urlvalue: String = url) => {
    let isUrlValid = true;
    let tempUrlErrors = [];

    if (urlvalue === "") {
      isUrlValid = false;
      tempUrlErrors.push("An URL must be provided.");
    }

    if (!urlvalue.startsWith("http")) {
      isUrlValid = false;
      tempUrlErrors.push("You must enter a valid HTTP/S URL.");
    }

    setUrlErrors(tempUrlErrors);
    return isUrlValid;
  };

  const validateSufix = (sufixValue: String = desiredSufix) => {
    let isSufixValid = true;
    let tempSufixErrors = [];

    if (sufixValue === "") {
      isSufixValid = false;
      tempSufixErrors.push("A sufix must be provided");
    }

    if (sufixValue.includes(" ")) {
      isSufixValid = false;
      tempSufixErrors.push("Url cannot contain whitespaces");
    }

    setSufixErrors(tempSufixErrors);
    return isSufixValid;
  };

  return (
    <form className="mt-[10rem] text-teal-500 dark:text-red-500 w-1/2 shadow-2xl mx-auto py-[3rem] flex flex-col gap-6">
      <div>
        <p className="text-3xl text-center">Acortador de links</p>
      </div>
      <UrlInput onChange={handleUrlChange} value={url} onClick={handleCutUrl} />
      <InputErrors errors={urlErrors} />
      <UrlResult url={url} sufix={assignedSufix} />
      <div className="w-fit mx-auto">
        <Button onClick={handleToogleOptions} text={"Advanced Options"} />
      </div>
      <OptionsPanel
        onChange={handleSufixChange}
        value={desiredSufix}
        open={isOptionsOpen}
      />
      <InputErrors errors={sufixErrors} />
    </form>
  );
}
