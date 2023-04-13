<script lang="ts">
	import type {Item} from '../item'
    import ItemCard from './ItemCard.svelte'
	import AdditionForm from "./AdditionForm.svelte";
	import {collection, Query, onSnapshot} from "firebase/firestore"
	import {db} from "../../lib/+firebase"

	let showAdditionForm = false;
	let removeFromList = false;

	
	let items: Item[] = [];
	async function getDB() {
		const collectionRef: Query<any> = collection(db, "items");
		onSnapshot(collectionRef, (collectionSnap) => {
    		items = collectionSnap.docs.map(doc => Object.assign(doc.data())) as Item[];
		});
		console.log(items)
	}
	getDB();
	
</script>
<svelte:head>
	<title>Inventory</title>
	<meta name="description" content="Collection of items in stock" />
</svelte:head>

<!-- <h1>Items</h1> -->

<div class="cards_grid">
	{#each items as item}
        <ItemCard {item}></ItemCard>
    {/each}
</div>

<div class="add-item">
	<button on:click={() => (showAdditionForm = true)}>
		Add
	</button>
	<button on:click={() => (removeFromList = true)}>
		Remove
	</button>
</div>

<AdditionForm bind:showAdditionForm>
<!--	<h2> Add a new item </h2>-->
<!--		<form>-->
<!--			<input type="text" id="name" placeholder="Item" required>-->
<!--			<input type="text" id="id" placeholder="Item's ID" required>-->
<!--			<input type="number" id="price" placeholder="Price" min="0" step="0.01" required>-->
<!--			<input type="number" id="integer" placeholder="Amount" pattern="[0-9]" min="1" step="1" required>-->
<!--			<input type="text" id="vendor" placeholder="Vendor's name" required>-->
<!--			<textarea id="message" rows="4" placeholder="Description" required></textarea>-->
<!--			<div class="buttons">-->
<!--				<button type="reset">Reset</button> <button type="submit">Send</button>-->
<!--			</div>-->
<!--		</form>-->
</AdditionForm>


<style>
    .cards_grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
</style>
