import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";

export function GameOverModal() {
    return (
      <UiModal
        width="md"
        isOpen={winnerSymbol}
        onClose={() => console.log("close")}
      >
        <UiModal.Header>Game over!</UiModal.Header>
        <UiModal.Body>
          <div className="text-sm">
            Winner: <span className="text-teal-600">Vitalii</span>
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton size="md" variant="outline">
            Return
          </UiButton>
          <UiButton size="md" variant="primary">
            Play again
          </UiButton>
        </UiModal.Footer>
      </UiModal>
    );
}