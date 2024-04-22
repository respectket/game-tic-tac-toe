import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border border-gray-400 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-400",
      )}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
