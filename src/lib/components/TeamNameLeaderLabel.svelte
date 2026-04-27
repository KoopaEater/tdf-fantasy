<script lang="ts">
    let { teamname, leader } = $props();
</script>

<div>
    <p id="teamname">{teamname}</p>
    <p id="leader">{leader}</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #teamname {
        font-weight: bold;
    }
    #leader {
        font-weight: normal;
    }
</style>