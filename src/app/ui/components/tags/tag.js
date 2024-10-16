export default function Tag ( {text, className} ) {
  return (
    <div className={`${className} px-4 py-1 w-min font-bold min-w-max`}>{text}</div>
  );
}