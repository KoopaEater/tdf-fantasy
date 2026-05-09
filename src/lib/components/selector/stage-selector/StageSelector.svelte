<script lang="ts">
    import NumberInput from "$lib/components/selector/stage-selector/NumberInput.svelte";
    import Selector from "$lib/components/selector/Selector.svelte";

    let { stage = $bindable(1), minStage = 1, maxStage = 99 } = $props();
</script>

<Selector title="VÆLG ETAPE">
    <button title="Første etape" onclick={() => stage = minStage}>
        <wa-icon name="angles-left"></wa-icon>
    </button>
    <button title="Forrige etape" onclick={() => stage--}>
        <wa-icon name="angle-left"></wa-icon>
    </button>
    <NumberInput bind:value={stage}></NumberInput>
    <button title="Næste etape" onclick={() => stage++}>
        <wa-icon name="angle-right"></wa-icon>
    </button>
    <button title="Seneste etape" onclick={() => stage = maxStage}>
        <wa-icon name="angles-right"></wa-icon>
    </button>
</Selector>

<style>

</style>