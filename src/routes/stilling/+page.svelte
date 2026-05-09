<script>
    import ScoreLabel from "$lib/components/ScoreLabel.svelte";
    import TeamNameLeader from "$lib/components/TeamNameLeader.svelte";
</script>

<h1>Stilling</h1>

<div class="wrapper">
    <ScoreLabel score="71" scorecolor="var(--color-gold)">
        <TeamNameLeader teamname="Team vi ska ik hjem" leader="Mads Hansen" />
    </ScoreLabel>
    <ScoreLabel score="58" scorecolor="var(--color-silver)">
        <TeamNameLeader teamname="Hold op" leader="Andreas Sloth"/>
    </ScoreLabel>
    <ScoreLabel score="49" scorecolor="var(--color-bronze)">
        <TeamNameLeader teamname="Hold da ferie" leader="Max Kørner Andersen"/>
    </ScoreLabel>
    <ScoreLabel score="35" >
        <TeamNameLeader teamname="Et andet hold der er meget meget meget meget meget meget meget meget meget langt" leader="En anden person"/>
    </ScoreLabel>
</div>


<style>
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: larger;
        --score-box-font-size: larger;
    }

</style>