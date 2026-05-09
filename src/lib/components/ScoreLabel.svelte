<script>
    import ScoreBox from "$lib/components/ScoreBox.svelte";

    let { score, scorecolor = "white", children } = $props();
</script>

<div class="wrapper">
    {@render children()}
    <ScoreBox score={score} color={scorecolor}></ScoreBox>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
    }

</style>