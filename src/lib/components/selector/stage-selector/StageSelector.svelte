<script lang="ts">
    import NumberInput from "$lib/components/selector/stage-selector/NumberInput.svelte";
    import Selector from "$lib/components/selector/Selector.svelte";

    let { stage = $bindable(1), minStage = 1, maxStage = 99 } = $props();
</script>

<Selector title="VÆLG ETAPE">
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
</Selector>

<style>
    .selector-wrapper {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }
    button {
        background: var(--color-secondary);
    }
</style>