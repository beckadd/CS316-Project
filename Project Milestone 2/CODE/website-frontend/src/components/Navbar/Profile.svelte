<script>
    import Icon from '@iconify/svelte';
    let profileURL='https://source.unsplash.com/random/500x500';
    let profile_name = "Beck"
</script>
<style>
    .profile {
        padding: 3px 3px;
        border-radius: 3px;
    }

    .profile:hover {
        border: 0.5px solid white;
    }

    .profile-pic {
        border-radius: 50%;
        max-width: 25pt;
        max-height: 25pt;
    }
    .profile > * {
        margin: 10px 5px;
    }

    .profile > .expanded-options, .profile > .hline {   
        display: none;
        transition: 200ms eas-in-out;
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
    <li><img class='profile-pic' src={profileURL} alt='profile avatar'/> {profile_name}</li>
    <hr class = 'hline'>
    <li class = 'expanded-options'><Icon icon="fluent:history-16-regular" color="white" inline = {true}/>Order History</li>
    <li class = 'expanded-options'><Icon icon="fluent:settings-16-regular" color="white" inline = {true}/>Settings</li>
</div>