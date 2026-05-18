<script lang="ts">
    import TeamSelector from "$lib/components/selector/team-selector/TeamSelector.svelte";

    let teams = [
        {value: 1, teamName: "Team vi ska ik hjem", leader: "Mads Hansen"},
        {value: 2, teamName: "Hold op", leader: "Andreas Sloth"},
        {value: 3, teamName: "Hold da ferie", leader: "Max Kørner Andersen"}
    ];

    let selected = $state(teams[0]);

</script>

<h1>Holddetaljer</h1>

<div class="team-selector-wrapper">
    <TeamSelector {selected} {teams}></TeamSelector>
</div>

<style>
    .team-selector-wrapper {
        display: flex;
        justify-content: end;
        margin-bottom: 8px;
    }
</style>
