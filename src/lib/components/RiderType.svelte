<script>
    let { logo, type } = $props();
</script>

<div class="wrapper">
    <wa-icon name={logo}></wa-icon>
    {type}
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        background: var(--color-primary);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 4px 8px;
        white-space: nowrap;
        font-weight: bold;
    }
</style>
