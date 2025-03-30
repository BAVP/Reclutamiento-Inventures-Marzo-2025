export function Button(props: { onClick: any; text: String }) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="cursor-pointer flex-shrink-0 bg-teal-500 transition dark:bg-red-500 dark hover:scale-[1.05] border-teal-500 dark:border-red-500 text-sm border-4 text-white py-1 px-2 rounded"
      >
        <p>{props.text}</p>
      </button>
    </>
  );
}
