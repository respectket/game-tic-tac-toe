import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icons";

export function BackLink() {
    return (
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight"
      >
        <ArrowLeftIcon />
        Home
      </Link>
    );
}