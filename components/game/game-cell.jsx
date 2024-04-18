import { GameSymbol } from "./game-symbol";
import styles from "./game.module.css";

export function GameCell ({ isWinner, onClick, symbol }) {
    return (
        <button 
            onClick={onClick} 
            className={`${styles['cell']} ${isWinner ? styles['cell--win'] : ''}`}>
            {symbol ? <GameSymbol symbol={symbol} /> : null}
        </button>
    )
}