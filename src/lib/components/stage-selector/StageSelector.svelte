<script lang="ts">
    import NumberInput from "$lib/components/stage-selector/NumberInput.svelte";

    let { stage = $bindable(1), minStage = 1, maxStage = 99 } = $props();
</script>

<div class="wrapper">
    VÆLG ETAPE
    <div class="selector-wrapper">
        <button title="first stage" onclick={() => stage = minStage}>
            <wa-icon name="angles-left"></wa-icon>
        </button>
        <button title="previous stage" onclick={() => stage--}>
            <wa-icon name="angle-left"></wa-icon>
        </button>
        <NumberInput bind:value={stage}></NumberInput>
        <button title="next stage" onclick={() => stage++}>
            <wa-icon name="angle-right"></wa-icon>
        </button>
        <button title="latest stage" onclick={() => stage = maxStage}>
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
</style>