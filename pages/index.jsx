import { useState } from "react";
import { GameField, GameInfo, GameTitle, useGameState } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {

  const [playersCount] = useState(2);
  const { cells, currentMove, handleCellClick, nextMove, winnerSequence } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo playersCount={playersCount} className="mt-4" currentMove={currentMove} />
        <GameField cells={cells} currentMove={currentMove} handleCellClick={handleCellClick} nextMove={nextMove} winnerSequence={winnerSequence} className="mt-6" />
      </main>
    </div>
  );
}
