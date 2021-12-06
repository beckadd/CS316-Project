<script lang="ts">
	import Review from './Review.svelte';
	export let reviews: Review[];
</script>

<div>
	{#each reviews as review}
		<Review {...review}/>
	{/each}
</div>

<style>
</style>
