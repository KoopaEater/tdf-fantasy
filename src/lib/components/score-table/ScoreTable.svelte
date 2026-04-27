<script lang="ts">
    import RiderType from "$lib/components/RiderType.svelte";
    import ScoreLabel from "$lib/components/ScoreLabel.svelte";
    import TeamNameLeaderLabel from "$lib/components/TeamNameLeaderLabel.svelte";

    // Helper: map score → color
    const scoreColor = (score: number) => {
        if (score <= 5) return "var(--color-bronze)";
        if (score <= 10) return "var(--color-silver)";
        return "var(--color-gold)";
    };

    // Hardcoded riders + scores
    const rows = [
        {
            logo: "web-awesome",
            type: "Kaptajn",
            riders: [
                { name: "Jonas Vingegaard", score: 15 },
                { name: "Tadej Pogačar", score: 12 },
                { name: "Primož Roglič", score: 18 }
            ]
        },
        {
            logo: "person-running",
            type: "Sprinter 1",
            riders: [
                { name: "Jasper Philipsen", score: 7 },
                { name: "Fabio Jakobsen", score: 14 },
                { name: "Sam Bennett", score: 3 }
            ]
        },
        {
            logo: "person-running",
            type: "Sprinter 2",
            riders: [
                { name: "Dylan Groenewegen", score: 9 },
                { name: "Arnaud Démare", score: 5 },
                { name: "Caleb Ewan", score: 11 }
            ]
        },
        {
            logo: "star",
            type: "Gylden 1",
            riders: [
                { name: "Wout van Aert", score: 20 },
                { name: "Mathieu van der Poel", score: 16 },
                { name: "Mads Pedersen", score: 8 }
            ]
        },
        {
            logo: "star",
            type: "Gylden 2",
            riders: [
                { name: "Tom Pidcock", score: 4 },
                { name: "Matej Mohorič", score: 10 },
                { name: "Alberto Bettiol", score: 13 }
            ]
        },
        {
            logo: "star",
            type: "Gylden 3",
            riders: [
                { name: "Remco Evenepoel", score: 6 },
                { name: "Ben O’Connor", score: 17 },
                { name: "Enric Mas", score: 2 }
            ]
        },
        {
            logo: "handshake",
            type: "Hjælper 1",
            riders: [
                { name: "Sepp Kuss", score: 11 },
                { name: "Domen Novak", score: 7 },
                { name: "Wilco Kelderman", score: 19 }
            ]
        },
        {
            logo: "handshake",
            type: "Hjælper 2",
            riders: [
                { name: "Tiesj Benoot", score: 14 },
                { name: "Chris Harper", score: 9 },
                { name: "Jan Tratnik", score: 6 }
            ]
        }
    ];
</script>

<div class="table-wrapper">
    <table>
        <thead>
        <tr>
            <th></th>
            <th>
                <ScoreLabel score="70" scorecolor="var(--color-gold)">
                    <TeamNameLeaderLabel teamname="Team vi ska ik hjem" leader="Mads Hansen"/>
                </ScoreLabel>
            </th>
            <th>
                <ScoreLabel score="58" scorecolor="var(--color-silver)">
                    <TeamNameLeaderLabel teamname="Hold op" leader="Andreas Sloth"/>
                </ScoreLabel>
            </th>
            <th>
                <ScoreLabel score="49" scorecolor="var(--color-bronze)">
                    <TeamNameLeaderLabel teamname="Hold da ferie" leader="Max Kørner Andersen"/>
                </ScoreLabel>
            </th>
        </tr>
        </thead>

        <tbody>
        {#each rows as row}
            <tr>
                <th>
                    <RiderType logo={row.logo} type={row.type} />
                </th>

                {#each row.riders as rider}
                    <td>
                        <ScoreLabel score={rider.score} scorecolor={scoreColor(rider.score)}>
                            {rider.name}
                        </ScoreLabel>
                    </td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<style>
    .table-wrapper {
        overflow-x: auto;
    }
    tbody th, thead th:first-child {
        position: sticky;
        left: 0;
        z-index: 3;
    }
    th {
        vertical-align: middle;
    }
    td:nth-child(odd), th:nth-child(odd) {
        background: var(--color-primary-subtle);
    }
    th:first-child {
        background: transparent;
    }
    tr {
        border: none;
    }
    thead tr {
        border-bottom: 1px solid;
    }
</style>
