import { MaterialIcon } from "./MaterialIcon";

export function CheckItem({ children }: { children: string }) {
  return (
    <li>
      <span className="check">
        <MaterialIcon name="check" />
      </span>
      {children}
    </li>
  );
}
