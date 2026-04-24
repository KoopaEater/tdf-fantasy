<script>
    import ScoreBox from "$lib/components/ScoreBox.svelte";

    let { text, score, scorecolor } = $props();
</script>

<div class="wrapper">
    {text}
    <ScoreBox score={score} color={scorecolor}></ScoreBox>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;
    }
</style>