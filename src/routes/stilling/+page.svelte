<script>
    import ScoreLabel from "$lib/components/ScoreLabel.svelte";
    import TeamNameLeaderLabel from "$lib/components/TeamNameLeaderLabel.svelte";
</script>

<h1>Stilling</h1>

<div class="outer-wrapper">
    <div class="wrapper">
        <ScoreLabel score="71" scorecolor="var(--color-gold)">
            <TeamNameLeaderLabel teamname="Team vi ska ik hjem" leader="Mads Hansen" />
        </ScoreLabel>
        <ScoreLabel score="58" scorecolor="var(--color-silver)">
            <TeamNameLeaderLabel teamname="Hold op" leader="Andreas Sloth"/>
        </ScoreLabel>
        <ScoreLabel score="49" scorecolor="var(--color-bronze)">
            <TeamNameLeaderLabel teamname="Hold da ferie" leader="Max Kørner Andersen"/>
        </ScoreLabel>
        <ScoreLabel score="35" >
            <TeamNameLeaderLabel teamname="Et andet hold der er meget langt" leader="En anden person"/>
        </ScoreLabel>
    </div>
</div>


<style>
    .outer-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: larger;
        --score-box-font-size: larger;
    }

</style>