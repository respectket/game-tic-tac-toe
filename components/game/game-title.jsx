import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icons";
import { StarIcon } from "./icons/star-icons";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight"
      >
        <ArrowLeftIcon />
        Home
      </Link>
      <h1 className="text-4xl leading-tight">Tic tac toe</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400 ">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />{playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />1 мин на ход
        </div>
      </div>
    </div>
  );
}
