import { Layout } from "../layout/layout";
import { UrlForm } from "./ui/urlForm";

export function HomePage() {
  return (
    <>
      <Layout>
        <div>
          <UrlForm />
        </div>
      </Layout>
    </>
  );
}
