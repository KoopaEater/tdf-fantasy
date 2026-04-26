<script lang="ts">
    let { initialStage = 1, minStage = 1, maxStage = 99 } = $props();
    let chosenStage = $state(initialStage); // DEN SKAL LIGE BINDES KORREKT
    trySetStageNumber(chosenStage);
    function sanitizeStageNumber(stage: number): number {
        if (stage < minStage) return minStage;
        if (stage > maxStage) return maxStage;
        return stage;
    }
    function setStageNumber(stage: number): void {
        const inputElem = document.getElementById("stage-input") as HTMLInputElement;
        if (!inputElem) return;
        chosenStage = stage;
        inputElem.value = String(stage);
    }
    function trySetStageNumber(stage: number): void {
        const sanitizedStage = sanitizeStageNumber(stage);
        setStageNumber(sanitizedStage);
    }
    function changeStageNumber(amount: number): void {
        trySetStageNumber(chosenStage + amount);
    }
</script>

<div class="wrapper">
    VÆLG ETAPE
    <div class="selector-wrapper">
        <button title="first stage" onclick={() => trySetStageNumber(1)}>
            <wa-icon name="angles-left"></wa-icon>
        </button>
        <button title="previous stage" onclick={() => changeStageNumber(-1)}>
            <wa-icon name="angle-left"></wa-icon>
        </button>
        <input id="stage-input">
        <button title="next stage" onclick={() => changeStageNumber(1)}>
            <wa-icon name="angle-right"></wa-icon>
        </button>
        <button title="latest stage" onclick={() => trySetStageNumber(99)}>
            <wa-icon name="angles-right"></wa-icon>
        </button>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        width: fit-content;
    }
    .selector-wrapper {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }
    button {
        background: var(--color-secondary);
    }
    input {
        max-width: 3.5rem;
        text-align: center;
        border: 2px solid var(--color-secondary);
    }
    input:focus {
        outline-color: var(--color-primary);
    }
</style>