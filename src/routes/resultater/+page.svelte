<script>
    import ScoreTable from "$lib/components/score-table/ScoreTable.svelte";
    import StageSelector from "$lib/components/selector/stage-selector/StageSelector.svelte";
</script>

<h1>Resultater</h1>
<div class="stage-selector-wrapper">
    <StageSelector></StageSelector>
</div>
<ScoreTable></ScoreTable>

<style>
    .stage-selector-wrapper {
        display: flex;
        justify-content: end;
        margin-bottom: 8px;
    }
</style>