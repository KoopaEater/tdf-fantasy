<script lang="ts">
    import TeamSelector from "$lib/components/selector/team-selector/TeamSelector.svelte";
    import RiderPoints from "$lib/components/details/RiderPoints.svelte";
    import ScoreLabel from "$lib/components/ScoreLabel.svelte";
    import TeamNameLeader from "$lib/components/TeamNameLeader.svelte";

    let teams = [
        {value: 1, teamName: "Team vi ska ik hjem", leader: "Mads Hansen", score: 71},
        {value: 2, teamName: "Hold op", leader: "Andreas Sloth", score: 58},
        {value: 3, teamName: "Hold da ferie", leader: "Max Kørner Andersen", score: 49},
        {value: 4, teamName: "Et andet hold der er meget meget meget meget meget meget meget meget meget langt", leader: "En anden person", score: 35},
    ];

    let selected = $state(teams[0]);

</script>

<h1>Holddetaljer</h1>

<div class="team-selector-wrapper">
    <TeamSelector bind:selected={selected} {teams}></TeamSelector>
</div>

<div class="details-wrapper">
    <RiderPoints></RiderPoints>
</div>

<style>
    .team-selector-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
    }

</style>
