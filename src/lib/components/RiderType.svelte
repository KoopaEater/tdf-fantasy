<script>
    let { logo, type } = $props();
</script>

<div class="wrapper">
    {type}
    <wa-icon name={logo}></wa-icon>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: var(--color-primary);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 4px 8px;
        white-space: nowrap;
        font-weight: bold;
        width: 120px;
        min-width: 120px;
    }
</style>
