type ColorsType = "red" | "blue" | "teal" | "white" | "black";
const colorsTailwind = {
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
  teal: "bg-teal-500 text-white",
  white: "bg-white text-black",
  black: "bg-black] text-white",
};

export function CircleInfo(
  props: { text: String; value: Number; size: Number; color: ColorsType } = {
    text: "",
    value: 0,
    size: 5,
    color: "white",
  }
) {
  return (
    <div className="flex flex-col">
      <div
        className={`rounded-full ${
          colorsTailwind[props.color][0]
        } shadow-2xl hover:scale[1.1] transition`}
      >
        {props.value.toString()}
      </div>
      <div>{props.text}</div>
    </div>
  );
}
