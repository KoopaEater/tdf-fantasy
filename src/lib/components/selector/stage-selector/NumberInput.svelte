
<script lang="ts">
    let { value = $bindable(1), min = 1, max = 99 } = $props();
    let latestValue = value;
    function sanitizeValue() {
        if (value === null) return;
        value = Math.floor(value);
        value = Math.max(min, value);
        value = Math.min(max, value);
        latestValue = value;
    }
    function handleBlur() {
        if (value === null) value = latestValue;
    }
    $effect(sanitizeValue);
</script>

<input type="number" bind:value={value} onblur={handleBlur}/>

<style>
    input {
        max-width: 3.5rem;
        text-align: center;
    }
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>