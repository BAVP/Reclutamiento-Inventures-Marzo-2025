export function InputErrors(props: { errors: String[] }) {
  return (
    <>
      <div className="w-4/5 mx-auto">
        {props.errors.map((error, i) => {
          return (
            <p key={i} className="text-xs text-red-500">
              {error}
            </p>
          );
        })}
      </div>
    </>
  );
}
