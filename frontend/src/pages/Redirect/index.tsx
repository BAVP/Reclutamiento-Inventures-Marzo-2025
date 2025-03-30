import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { clickUrl } from "../../api/url";

export function Redirect() {
  const navigate = useNavigate();
  const { sufix } = useParams();

  useEffect(() => {
    // If sufix were something empty, it should go to homepage instead.
    fetch(clickUrl(sufix!), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((url) => {
        url = url.replace(/"/g, "");
        console.log(url);
        if (url && url.startsWith("http")) {
          window.location.href = url;
        } else {
          console.error("Invalid url");
        }
      })
      .catch((err) => console.log("[Redirect - Error] ", err));
  }, [navigate]);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
