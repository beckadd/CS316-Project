<script lang="ts">
    import Icon from '@iconify/svelte';

    $: search_text = "";
    let isFocused = false;
</script>
<style>
    .search-box {
        display: flex;
        background-color: black;
        border: 1px solid white;

        max-width: fit-content;
        padding: 5px 10px;
        justify-content: space-between;
        border-radius: 3px;

        height: 20pt;
        margin: auto;
        vertical-align: center;
    }

    .search-box > button {
        background: none;
        border: none;
        width: 0;
        visibility: hidden;
    }

    .search-box:hover > button {
        width: 100%;
        visibility: visible;
    }

    button:hover {
        background: hsl(0 0% 15%);
        border-radius: 3px;
    }

    .search-input {
        background-color: transparent;
        border-color: transparent;
        color: white;
        font-size: 18pt;
        padding: 0px 5px;
        vertical-align: center;
    }
    
    .search-input:focus {
        outline: none;
    }

    .search-input::-webkit-search-cancel-button{ 
        display: none;
    }

    .search-button {
        visibility: visible;
    }

</style>

<div class = 'search-box'>
    <button><Icon icon = "fluent:filter-16-regular" color="white" height="20"/></button>
    <input type = "search" class = "search-input" placeholder="Search" bind:value={search_text}>
    <button><Icon icon = "fluent:dismiss-16-regular" color="white" height="20"/></button>
    <button class = "search-button"><Icon icon = "fluent:search-16-regular" color="white" height="20"/></button>
</div>