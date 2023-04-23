<script lang="ts">
	import type { Item } from '../../item';
	import cross from '$lib/images/cross.svg';
	import {
		type QuerySnapshot,
		type QueryDocumentSnapshot,
		type DocumentSnapshot,
		type DocumentReference,
		doc,
		getDoc
	} from 'firebase/firestore';
	import { collection, Query, onSnapshot, getDocs } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { onMount } from 'svelte';
	export const prerender = true;
	let param_id = 'loading';

	onMount(() => {
		const pathParts = window.location.pathname.split('/');
		param_id = pathParts[pathParts.length - 1];
	});

	let item: Item = {
		name: 'Hammer',
		id: param_id,
		description: 'Good hammer',
		price: 100,
		amount: 2,
		vendor: 'Vendor1'
	};

	function decrement() {
		if (item.amount > 0) {
			item.amount -= 1;
		}
	}

	function increment() {
		item.amount += 1;
	}

	// async function getItemById(id: string): Promise<Item | null> {
	// 	const docRef: DocumentReference<Item> = doc(db, 'items', id);
	// 	const docSnap: DocumentSnapshot<Item> = await getDoc(docRef);
	// 	if (docSnap.exists()) {
	// 		return Object.assign(docSnap.data(), { id: docSnap.id }) as Item;
	// 	} else {
	// 		return null;
	// 	}
	// }
</script>

<svelte:head>
	<title>{item.name}</title>
	<meta name="description" content="Collection of items in stock" />
</svelte:head>
<div class="page_content">
	<a class="back_button" href="../inventory">
		<img class="back_img" src={cross} alt="Close" />
	</a>
	<div class="card_content">
		<h1 class="item_title">{item.name} ({param_id})</h1>
		<hr />
		<div class="description_box">
			<p>Item description:</p>
			<p class="item_description">{item.description}</p>
		</div>
		<div class="info_box">
			<p class="item_price">Price: {item.price}$</p>
			<p class="item_vendor">Vendor: {item.vendor}</p>
		</div>

		<div class="item_amount">
			<button on:click={decrement}>-</button>
			<p>In Stock: {item.amount}</p>
			<button on:click={increment}>+</button>
		</div>
	</div>
</div>

<style>
	hr {
		width: 70%;
		border-width: 2px;
	}
	.card_content {
		display: flex;
		flex-direction: column;
	}
	.page_content {
		position: relative;
		width: 80%;
		max-width: 800px;
		height: 80%;
		max-height: 600px;
		align-self: center;
		background-color: aliceblue;
		border-radius: 0.5rem;
		box-shadow: 0 2px 4px rgb(206, 178, 154);
		padding: 30px;
	}

	.item_title {
		font-weight: 300;
		text-align: center;
	}

	.description_box {
		display: flex;
		flex-direction: row;
		font-weight: 400;
		font-size: 1.4em;
	}
	.item_description {
		margin-left: 20px;
		font-weight: 300;
	}
	.info_box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 1.2em;
		vertical-align: middle;
	}

	.item_price {
		font-weight: 400;
		font-size: 1.2em;
		margin-top: 0.1em;
		vertical-align: middle;
	}

	.item_vendor {
		vertical-align: middle;
		height: fit-content;
	}

	.item_amount {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
	}

	.item_amount button {
		height: 30px;
		width: 30px;
		margin: 0 10px;
		border: 1px solid #c69775;
		background-color: #eee9d85a;
		color: #c69775;
		font-size: 18px;
		font-weight: 500;
		border-radius: 100%;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.item_amount button:hover {
		background-color: #c69775;
		border-color: #c69775;
		color: aliceblue;
	}

	.back_button {
		position: absolute; /* position button absolute */
		top: 1.7vw;
		right: 1.7vw;
		height: 3vh;
		width: fit-content;
	}
	.back_img {
		height: inherit;
		width: inherit;
	}

	.back_button:hover {
		cursor: pointer;
	}
	.back_button:active {
		transform: scale(0.94);
	}
</style>
