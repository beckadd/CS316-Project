<script lang = "ts">
    import Icon from '@iconify/svelte';
    let pfp = 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
    export let profile_name = "Sign In/Sign Up"
    export let signedIn = false;
</script>

<style>
    .profile {
        padding: 3px;
        border-radius: 3px;
    }

    .profile:hover {
        border: 0.5px solid white;
    }

    .profile-pic {
        border-radius: 50%;
        max-width: 25pt;
        max-height: 25pt;
        vertical-align: center;
    }
    .profile-header > * {
        margin: 5px;
        vertical-align: center;
    }

    .profile > .expanded-options, .profile > .hline {   
        display: none;
        transition: 200ms ease-in-out;
    }

    .profile > .expanded-options {
        font-size: 15pt;
        padding: 5px 5px;
    }

    .profile:hover > .expanded-options, .profile:hover > .hline {
        display: flex;
    }
    
</style>

<div class='profile'>
    <li class = 'profile-header' on:click = {}>
        <img class='profile-pic' src={pfp} alt='profile avatar'/> 
        <b class = 'username'>{profile_name}</b>
    </li>
    {#if signedIn}
    <hr class = 'hline'>
    <li class = 'expanded-options'><Icon icon="fluent:history-16-regular" color="white" inline = {true}/>Order History</li>
    <li class = 'expanded-options'><Icon icon="fluent:settings-16-regular" color="white" inline = {true}/>Settings</li>
    {/if}
</div>