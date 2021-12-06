<script lang="ts">
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import FilterOptions from './FilterOptions.svelte';

	$: search_text = '';
	$: showFilterOptions = false;
</script>

<div class="search-box">
	<button on:click={() => (showFilterOptions = !showFilterOptions)}
		><Icon icon="fluent:filter-16-regular" color="white" height="20" /></button
	>
	<input type="search" class="search-input" placeholder="Search" bind:value={search_text} />
	<button><Icon icon="fluent:dismiss-16-regular" color="white" height="20" /></button>
	<button class="search-button"
		><Icon icon="fluent:search-16-regular" color="white" height="20" /></button
	>

	{#if showFilterOptions}
		<div transition:slide={{ delay: 150, duration: 300, easing: expoInOut }}>
			<FilterOptions />
		</div>
	{/if}
</div>

<style>
	.search-box {
		display: grid;
		background-color: black;
		border: 1px solid white;
		grid-template-areas:
			'filter searchbox cancel search'
			'filter-options filter-options filter-options filter-options';
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

	.search-input::-webkit-search-cancel-button {
		display: none;
	}

	.search-button {
		visibility: visible;
	}

	.filter-options {
		grid-area: filter-options;
		background-color: rgba(255, 255, 255, 0.548);
	}
</style>
