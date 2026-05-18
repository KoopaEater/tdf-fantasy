<script lang="ts">
    import Select from 'svelte-select';
    import Selector from "$lib/components/selector/Selector.svelte";
    import TeamNameLeader from "$lib/components/TeamNameLeader.svelte";

    type Team = {
        teamName: string,
        leader: string,
    };
    let teams = [
        {value: 1, teamName: "Team vi ska ik hjem", leader: "Mads Hansen"},
        {value: 2, teamName: "Hold op", leader: "Andreas Sloth"},
        {value: 3, teamName: "Hold da ferie", leader: "Max Kørner Andersen"}
    ];
    let selectedTeam: Team = $state(teams[0]);

</script>

<Selector title="VÆLG HOLD">
    <div class="dropdown-wrapper">
        <Select items={teams} bind:value={selectedTeam} clearable={false} searchable={false} placeholder="Vælg et hold" showChevron={true}>
            <div slot="item" let:item>
                <!--{item.teamName}-->
                <TeamNameLeader teamname={item.teamName} leader={item.leader} />
            </div>
            <div slot="selection" let:selection>
                <TeamNameLeader teamname={selection.teamName} leader={selection.leader} />
            </div>
        </Select>
    </div>
</Selector>

<style>
    .dropdown-wrapper {
        width: 250px;
        display: block;
        --item-height: auto;
        --border-radius: 6px;
        --border-radius-focused: 6px;
        --border: 2px solid var(--color-secondary);
        --border-focused: 2px solid var(--color-secondary);
        --border-hover: 2px solid var(--color-secondary-light);
        --chevron-color: var(--color-secondary);
        --item-hover-bg: var(--color-primary-subtle);
        --item-is-active-bg: var(--color-primary);
        --item-is-active-color: var(--color-secondary);
        /*--item-line-height: normal;*/
        --item-padding: 8px;
        --list-border-radius: 6px;
    }
</style>