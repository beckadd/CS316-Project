<script>
    import Navbar from '../components/Navbar/Navbar.svelte';
</script>

<style>
    :global(body) {
        background-color: black;
        font-family: "Segoe UI";
        color: white;
    }

</style>

<Navbar/>
<slot></slot> <!-- Defines a location where a viewframe can exist-->