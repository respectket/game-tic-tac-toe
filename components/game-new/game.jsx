import { GameTitle } from "../game/game-title";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";

export function Game() {
    return (
        <GameLayout backLink={<BackLink />} title={<GameTitle />} gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={'1 minutes'} />} />
    )
}