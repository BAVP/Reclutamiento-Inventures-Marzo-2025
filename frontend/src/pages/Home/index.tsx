import { LinkForm } from "./form";

export function HomePage() {
  return (
    <>
      <div className="w-full h-[100vh] m-0">
        <div className="bg-blue-600 px-3 py-6 flex flex-col w-1/2 mx-auto mt-[15rem] rounded-xl shadow-xl">
          <div>
            <LinkForm />
          </div>
        </div>
        <div>
          <button>?</button>
        </div>
      </div>
    </>
  );
}
