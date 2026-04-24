<script>
    import RiderType from "$lib/components/RiderType.svelte";
    import TextWithScore from "$lib/components/TextWithScore.svelte";

    // Helper: map score → color
    const scoreColor = (s) => {
        if (s <= 5) return "lightgray";
        if (s <= 10) return "lightgreen";
        if (s <= 15) return "lightblue";
        return "gold";
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
            <th>Hold 1</th>
            <th>Hold 2</th>
            <th>Hold 3</th>
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
                        <TextWithScore
                                text={rider.name}
                                score={rider.score}
                                scorecolor={scoreColor(rider.score)}
                        />
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
        vertical-align: middle;
        position: sticky;
        left: 0;
        z-index: 3;
    }
    td:nth-child(odd), th:nth-child(odd) {
        background: #FFD;
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
