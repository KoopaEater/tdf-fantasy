<script>

import Selector from "$lib/components/selector/Selector.svelte";
import TeamNameLeader from "$lib/components/TeamNameLeader.svelte";
</script>

<Selector title="VÆLG HOLD">
    <button title="Forrige hold">
        <wa-icon name="angle-left"></wa-icon>
    </button>
    <div class="team-container">
        <TeamNameLeader teamname="Team vi ska ik hjem" leader="Mads Hansen"/>
    </div>
    <button title="Næste hold">
        <wa-icon name="angle-right"></wa-icon>
    </button>
</Selector>

<style>
    .team-container {
        border: 2px solid var(--color-secondary);
        border-radius: 6px;
        padding: 4px 8px;
    }
</style>