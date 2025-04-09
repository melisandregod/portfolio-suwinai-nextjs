import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return <div className="flex flex-row m-4">
    <p className="">Header</p>
    <div className="mx-4">
  <ModeToggle/>
  </div>
  </div>;
}
