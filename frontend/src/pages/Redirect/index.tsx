import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { clickUrl } from "../../api/url";
import { Layout } from "../layout/layout";

export function Redirect() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);
  const { sufix } = useParams();
  const isRedirecting = useRef(false); // To prevent multiple redirections

  // Fetch data from ip
  const fetchExtraData = async () => {
    try {
      const response = await fetch("http://ip-api.com/json");
      const extraData = await response.json();

      if (extraData.status === "success") {
        return extraData;
      }

      return {};
    } catch (err) {
      console.error("[Extra Data - Error] ", err);
      return {};
    }
  };

  // Fetch real url to redirect
  const fetchData = async (extraData: any = {}) => {
    setIsLoading(true);

    // Prevent multiple redirects
    if (isRedirecting.current) return;

    try {
      const response = await fetch(clickUrl(sufix!), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(extraData),
      });

      let resUrl = await response.text();
      setIsLoading(false);

      resUrl = resUrl.replace(/"/g, "");
      if (resUrl && resUrl.startsWith("http")) {
        // Redirect only if it is a valid url
        isRedirecting.current = true;
        redirect(resUrl);
      } else {
        setError(`Invalid URL: ${resUrl}`);
        console.error("Invalid url");
      }
    } catch (err) {
      console.log("[Redirect - Error] ", err);
    }
  };

  const redirect = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      // Wait the extra data
      const extraData = await fetchExtraData();
      // Wait the data
      if (!isRedirecting.current) await fetchData(extraData);
    };

    console.log("1");
    if (!isRedirecting.current) {
      console.log("2");
      fetchDataAsync();
    }
  }, []);

  return (
    <>
      <Layout>
        <div className="w-4/5 mx-auto mt-6">
          {isLoading ? "Redirecting..." : error ? error : ""}
        </div>
      </Layout>
    </>
  );
}
function UseRef(arg0: boolean) {
  throw new Error("Function not implemented.");
}
