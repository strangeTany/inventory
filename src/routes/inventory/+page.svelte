<script lang="ts">
	import type { Item } from '../item';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import AdditionForm from '$lib/components/AdditionForm.svelte';
	import addButton from '$lib/images/add.svg';
	import type { QuerySnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
	import { collection, Query, onSnapshot, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { browser } from '$app/environment';

	let showAdditionForm = false;
	let removeFromList = false;

	let items: Item[] = [];
	async function getDB() {
		const collectionRef: Query<any> = collection(db, 'items');
		if (browser) {
			onSnapshot(collectionRef, (collectionSnap) => {
				items = collectionSnap.docs.map((doc) => Object.assign(doc.data())) as Item[];
			});
		} else {
			const collectionSnap: QuerySnapshot<Item> = await getDocs(collectionRef);
			items = collectionSnap.docs.map((doc: QueryDocumentSnapshot<Item>) =>
				Object.assign(doc.data(), { id: doc.id })
			);
			console.log(items);
		}
	}
	getDB();
</script>

<svelte:head>
	<title>Inventory</title>
	<meta name="description" content="Collection of items in stock" />
</svelte:head>

<!-- <h1>Items</h1> -->

<div class="cards_grid">
	{#if items}
		{#each items as item}
			<ItemCard {item} />
		{/each}
	{/if}
</div>

<button class="add_btn" on:click={() => (showAdditionForm = true)}>
	<img class="add_img" src={addButton} alt="button to add new item" />
</button>
<!-- <button on:click={() => (removeFromList = true)}>
		Remove
	</button> -->

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
	.cards_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 1rem;
	}
	.add_btn {
		position: fixed;
		height: 9vh;
		width: fit-content;
		background: none;
		border: none;
		bottom: 8%;
		right: 6%;
	}
	.add_img {
		height: inherit;
		width: inherit;
	}
	button:hover {
		cursor: pointer;
	}
	button:active {
		transform: scale(0.94);
	}
</style>
