<script>
    let navbar_open = $state(false);
    function dropMenu() {
        navbar_open = !navbar_open;
    }
</script>

<nav>
    <div class="nav-content">
        <div class="logo-dropdown-wrapper">
            <a id="logo" href="/"><h3>LOGO</h3></a>
            <button  onclick={dropMenu} id="dropdown-btn" title="Dropdown">
                <wa-icon name={navbar_open ? "xmark" : "bars"}></wa-icon>
            </button>
        </div>
        <div class="pages" class:hidden={!navbar_open}>
            <a href="/stilling"><p>Stilling</p></a>
            <a href="/resultater"><p>Resultater</p></a>
            <a href="/detaljer"><p>Holddetaljer</p></a>
        </div>
    </div>
</nav>

<style>
    nav {
        position: sticky;
        top: 0;
        background-color: var(--color-primary);
        margin: 0;
        text-align: center;
    }
    .nav-content {
        max-width: var(--max-page-width);
        padding: 1rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
    }
    .logo-dropdown-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #logo {
        text-decoration: none;
    }
    #dropdown-btn {
        display: none;
    }
    .pages {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-left: auto;
    }
    .pages a {
        text-decoration: none;
    }

    @media (max-width: 530px) {
        .nav-content {
            display: block;
        }
        #dropdown-btn {
            display: block;
        }
        .pages {
            position: sticky;
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        .hidden {
            display: none;
        }
    }
</style>
