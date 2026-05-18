<script lang="ts">
    let { teamname, leader } = $props();
</script>

<div title="{teamname}, {leader}">
    <span class="line" id="teamname">{teamname}</span>
    <span class="line" id="leader">{leader}</span>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        min-width: 0;
        line-height: normal;
    }
    .line {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    #teamname {
        font-weight: bold;
    }
    #leader {
        font-weight: normal;
    }
</style>