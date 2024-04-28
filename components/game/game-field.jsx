import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {

  const actions = (
      <>
        <UiButton size="md" variant="primary">
          Stand-off
        </UiButton>
        <UiButton size="md" variant="outline">
          Give up
        </UiButton>
      </>
  )

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo actions={actions} />

      <GameGrid>
          {cells.map((_, index) => (
            <GameCell key={index}>

            </GameCell>
          ))}
      </GameGrid>

    </GameFieldLayout> 
  );
}

function GameCell({ children }) {
  return (
    <button
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  )
}

function GameMoveInfo({ actions }) {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          Step: <ZeroIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Next: <CrossIcon />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-4">
      {children}
    </div>
  );
}