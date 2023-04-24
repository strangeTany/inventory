<script lang="ts">
	import bin from '$lib/images/bin.svg';
	import {collection, deleteDoc, doc, onSnapshot, Query} from "firebase/firestore"
	import {db} from "../firebase";
	let param_id = 'loading';
	export let itemID: string;

	async function deleteItem(id: string){
		await deleteDoc(doc(db, "items", id));
	}

	function remove() {
		let isDelete = confirm("Are you sure you want to delete this item?");
		if (isDelete === true){
			deleteItem(itemID);
			console.log("Removed");
		}
	}
</script>

<button class="delete_button">
	<img class="delete_img" src={bin} alt="Delete" on:click={() => remove()}/>
</button>

<style>
	.delete_button {
		position: absolute;
		height: 20px;
		width: 20px;
		top: 1vh;
		right: 1vh;
		padding: 0px;
		border: none;
		background: none;
	}

	.delete_img {
		height: inherit;
		width: inherit;
	}
	.delete_button:hover {
		cursor: pointer;
	}
	.delete_button:active {
		transform: scale(0.9);
	}
</style>
