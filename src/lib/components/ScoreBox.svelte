<script>
    let { score, color } = $props();
</script>

<div class="container" style="--score-bg: {color}">
    {score}
</div>

<style>
    .container {
        min-width: 2rem;
        border-radius: 10px;
        padding: 4px;
        background: var(--score-bg, lightgrey);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
</style>