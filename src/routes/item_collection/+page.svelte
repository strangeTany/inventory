<script lang="ts">
    import type {Item} from '../item'
    import ItemCard from './ItemCard.svelte'
    let items: Item[] = [{name: "Hammer", id: "001", description: "Good hammer", price: 100, amount: 2, vendor: "Vendor1"}, 
    {name: "Hammer", id: "002", description: "Good hammer, almost fantastic hammer", price: 100, amount: 2, vendor: "Vendor1"},
    {name: "Hammer", id: "003", description: "Good hammer", price: 100, amount: 2, vendor: "Vendor1"},
    {name: "Hammer", id: "004", description: "Good hammer", price: 100, amount: 2, vendor: "Vendor1"}];
</script>
<svelte:head>
	<title>Item Collection</title>
	<meta name="description" content="Collection of items in stock" />
</svelte:head>

<div class="cards_grid">
	{#each items as item}
        <ItemCard {item}></ItemCard>
    {/each}
</div>

<style>
    .cards_grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
</style>
