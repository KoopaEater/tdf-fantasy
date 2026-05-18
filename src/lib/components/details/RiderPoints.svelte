<script>

import RiderType from "$lib/components/RiderType.svelte";
import ScoreLabel from "$lib/components/ScoreLabel.svelte";
import RiderName from "$lib/components/RiderName.svelte";

let groups = [
    {
        type: "Kaptajn",
        logo: "web-awesome",
        riders: [
            {
                name: "Jonas Vingegaard",
                score: 42,
            }
        ]
    },
    {
        type: "Sprinter",
        logo: "person-running",
        riders: [
            {
                name: "Jonathan Milan",
                score: 12,
            },
            {
                name: "Mads Pedersen",
                score: 30,
            }
        ]
    },
    {
        type: "Gylden",
        logo: "star",
        riders: [
            {
                name: "Jonathan Milan",
                score: 12,
            },
            {
                name: "Mads Pedersen",
                score: 30,
            }
        ]
    },
    {
        type: "Udgået",
        logo: "ban",
        riders: [
            {
                name: "Florian Lipowitz",
                score: 9,
            },
            {
                name: "Tadej Pogacar",
                score: 30,
            }
        ]
    },
]

</script>


<div class="wrapper">
    {#each groups as group}
        <div class="group-wrapper">
            <div class="type-wrapper">
                <RiderType type={group.type} logo={group.logo}/>
            </div>
            <div class="riders-wrapper">
                {#each group.riders as rider}
                    <ScoreLabel score={rider.score}>
                        <RiderName name={rider.name}/>
                    </ScoreLabel>
                {/each}
            </div>
        </div>
    {/each}
</div>


<style>
    .type-wrapper {
        margin-bottom: 8px;
    }
    .riders-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .group-wrapper {
        margin-bottom: 32px;
    }
</style>