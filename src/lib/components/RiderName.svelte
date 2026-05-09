<script>
    let { children } = $props();
</script>

<span class="wrapper">
    {@render children()}
</span>

<style>
    .wrapper {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>