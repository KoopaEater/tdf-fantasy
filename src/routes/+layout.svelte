<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from "$lib/components/navbar/Navbar.svelte";
	import '$lib/styles/colors.css';
	import '$lib/styles/app.css';
	import '$lib/webawesome.ts';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar></Navbar>
{@render children()}
