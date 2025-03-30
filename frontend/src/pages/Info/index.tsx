import { Layout } from "../layout/layout";
import { Overview } from "./overview";

export function UrlPage() {
  return (
    <Layout>
      <div className="mt-6">
        <Overview />
      </div>
    </Layout>
  );
}
