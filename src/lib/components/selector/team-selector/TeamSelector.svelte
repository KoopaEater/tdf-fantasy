<script>

import Selector from "$lib/components/selector/Selector.svelte";
</script>

<Selector title="VÆLG HOLD">
    <button title="Previous team">
        <wa-icon name="angle-left"></wa-icon>
    </button>
    <button title="Next team">
        <wa-icon name="angle-right"></wa-icon>
    </button>
</Selector>

<style>
    button {
        background: var(--color-secondary);
    }
</style>