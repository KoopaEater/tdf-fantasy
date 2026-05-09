<script>
    let { title, children } = $props();
</script>

<div class="wrapper">
    {title}
    {@render children()}
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        width: fit-content;
    }
</style>
