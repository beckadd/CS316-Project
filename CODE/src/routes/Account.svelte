<script lang='ts'>
    import type { Profile } from 'src/models/Profile';
    export let profile: Profile;

    
</script>
<style></style>

<div>
    <img class="profile-picture" src={profile.getProfilePicture()}>
    <h1 class='name'>{profile.nameData.getFullName()}</h1>
    <div class='contact-info'>
        <i class='email'>{profile.contactInformation.getEmail()}</i>
    </div>
</div>