<script>
    import ScoreBox from "$lib/components/ScoreBox.svelte";

    let { score, scorecolor = "white", children } = $props();
</script>

<div class="wrapper">
    <ScoreBox score={score} color={scorecolor}></ScoreBox>
    {@render children()}
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

</style>