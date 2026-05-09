<script>
    let { name } = $props();
</script>

<span class="wrapper" title={name}>
    {name}
</span>

<style>
    .wrapper {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>