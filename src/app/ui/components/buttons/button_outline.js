import Link from "next/link";

export default function Button_outline({
  href,
  text,
  icon,
  className,
  target,
  iconFirst,
  hiddenText,
  onClick, // <- novo
}) {
  const classes = `${icon ? "flex gap-2" : ""} ${
    iconFirst ? "flex-row-reverse justify-center" : ""
  } border ${className}`;

  const content = (
    <button
      onClick={onClick}
      className={classes}
    >
      {text && <p className={hiddenText ? "hidden xl:block" : ""}>{text}</p>}
      {icon}
    </button>
  );

  if (href) {
    return (
      <Link href={href} target={target ? "_blank" : undefined}>
        {content}
      </Link>
    );
  }

  return content;
}
