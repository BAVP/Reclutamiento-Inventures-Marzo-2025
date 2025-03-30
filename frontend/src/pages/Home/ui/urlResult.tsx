export function UrlResult(props: { url: String; sufix: String }) {
  if (props.sufix === "") return <></>;
  return (
    <>
      <div className="flex flex-col w-4/5 mx-auto">
        <div>
          <p>Original url: {props.url}</p>
        </div>
        <div>
          <p>New url: {props.sufix}</p>
        </div>
      </div>
    </>
  );
}
