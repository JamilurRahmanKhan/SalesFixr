export function MaterialIcon({
  name,
  className,
  "aria-hidden": ariaHidden = true,
}: {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      aria-hidden={ariaHidden}
    >
      {name}
    </span>
  );
}
