<script>
    let { title, children } = $props();
</script>

<div class="wrapper">
    {title}
    <div class="selector-wrapper">
        {@render children()}
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
        align-items: stretch;
    }
</style>
