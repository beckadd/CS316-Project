<script>
    import Cart from "./Cart.svelte";
    import Profile from "./Profile.svelte";
    import SearchBar from "./SearchBar.svelte";
    import Logo from "./Logo.svelte";

</script>

<style>
    * {
        font-size: 20pt;
    }

    .navbar {
        display: grid;
        grid-template-areas:
        "logo ... search cart account";
        justify-content: space-between;
        list-style: none;
        grid-template-columns: 25% auto 50%;
        padding: 5px 20px;

    }

    .navbar > * {
        margin: 0px 10px;
    }

    #logo {
        grid-area: logo;
    }

    #search {
        grid-area: search;
    }

    #cart {
        grid-area: cart;
    }

    #profile {
        grid-area: account;
    }


    
</style>

<nav class = 'navbar'>
    <li id = 'logo'><Logo/></li>
    <div id = "search"><SearchBar/></div>
    <div id = 'cart'><Cart/></div>
    <li id = 'profile'><Profile/></li>
</nav>