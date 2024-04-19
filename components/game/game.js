import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { ResetButton } from "./reset-button";
import { useGameState } from "./use-game-state";

export function Game () {
    const {
        cells,
        currentStep,
        winnerSymbol,
        isDraw,
        toggleCell,
        resetGame,
        getWinnerCell,
    } = useGameState();

    return (
      <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
        <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
        <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
          {cells.map((symbol, index) => (
            <GameCell key={index} symbol={symbol} isWinner={getWinnerCell(index)} onClick={() => toggleCell(index)} />
          ))}
        </div>
        <ResetButton onClick={resetGame} />
      </div>
    );

}