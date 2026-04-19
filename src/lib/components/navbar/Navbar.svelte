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
                <wa-icon name="bars" variant="solid"></wa-icon>
            </button>
        </div>
        <div class="pages" class:closed={!navbar_open}>
            <a href="/A"><p>A</p></a>
            <a href="/B"><p>B</p></a>
            <a href="/C"><p>C</p></a>
        </div>
    </div>
</nav>

<style>
    nav {
        position: sticky;
        top: 0;
        background-color: var(--color-primary);
        padding: 1rem;
        margin: 0;
        text-align: center;
    }
    .nav-content {
        max-width: 800px;
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
        .closed {
            display: none;
        }
    }
</style>
