<script>
    let { score, color } = $props();
</script>

<div class="container" style="--score-bg: {color}">
    {score}
</div>

<style>
    .container {
        min-width: 2.2em;
        border-radius: 0.5em;
        padding: 0.3em;
        background: var(--score-bg);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-size: var(--score-box-font-size, medium);
    }
</style>