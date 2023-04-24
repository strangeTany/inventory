<script lang="ts">
	import {createForm} from "svelte-forms-lib";
	import cross from '$lib/images/cross.svg';
	import type {Item} from "../../routes/item";
	import {addDoc, collection, CollectionReference, DocumentReference} from "firebase/firestore";
	import {db} from "../firebase";

	interface Error {
	name?: string;
	description?: string;
	price?: string;
	amount?: string;
	vendor?: string;
}

	export let showAdditionForm: boolean; // boolean
	let dialog: HTMLDialogElement; // HTMLDialogElement
	$: if (dialog && showAdditionForm) dialog.showModal();


	async function addToDB(newItem: Item) {
		const collectionRef: CollectionReference<any> = collection(db, "items");
		const collectionSnap: DocumentReference<Item> = await addDoc(collectionRef, newItem);
	}

	const { form, handleChange, handleSubmit, handleReset, errors } = createForm({
		initialValues: {} as Item,
		validate: values => {
			let errs: Error = {};
			const for_price = new RegExp("\\d{1,3}(?:[.,]\\d{3})*(?:[.,]\\d{2})");
			const for_amount = new RegExp("[1-9]\d*|0");
			if (values.name === "") {
				errs["name"] = "Name is required";
			}
			if  ((values.price === undefined) || !(for_price.test(values.price.toString()))) {
				errs["price"] = "Invalid price: should be written as 00.00";
			}
			if  ((values.amount === undefined) || !(for_amount.test(values.amount.toString()))) {
				errs["amount"] = "Invalid amount of items";
			}
			if (values.vendor === "") {
				errs["vendor"] = "Vendor'name is required";
			}
			if (values.description === "") {
				errs["description"] = "Description is required";
			}
			return errs;
		},
		onSubmit: values => {
			addToDB(values);
			alert("You added new item to the stock.");
		}
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
		bind:this={dialog}
		on:close={() => (showAdditionForm = false)}
		on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<slot name="header" />
		<!--        <slot />-->
		<h2>Add a new item</h2>
		<!-- svelte-ignore a11y-autofocus -->
		<button class="close_btn" autofocus on:click={() => dialog.close()}>
			<img class="close_img" src={cross} alt="Close" />
		</button>
		<form on:submit={handleSubmit}>
			<div class="form">
				<input
						type="text" id="name" placeholder="Item"
						bind:value={$form.name} on:change={handleChange}>
				{#if $errors.name}
					<small>{$errors.name}</small>
				{/if}
				<input
						type="number" id="price" placeholder="Price"
						bind:value={$form.price} on:change={handleChange} min="0.01" step="0.01">
				{#if $errors.price}
					<small>{$errors.price}</small>
				{/if}
				<input
						type="number" id="amount" placeholder="Amount"
						bind:value={$form.amount} on:change={handleChange} min="1" step="1">
				{#if $errors.amount}
					<small>{$errors.amount}</small>
				{/if}
				<input
						type="text" id="vendor" placeholder="Vendor's name"
						bind:value={$form.vendor} on:change={handleChange}>
				{#if $errors.vendor}
					<small>{$errors.vendor}</small>
				{/if}
				<textarea
						id="description" rows="3" placeholder="Description"
						bind:value={$form.description} on:change={handleChange}></textarea>
				{#if $errors.description}
					<small>{$errors.description}</small>
				{/if}
			</div>

			<div class="buttons">
				<button class="form_button reset" type="reset">Reset</button>
				<button class="form_button submit" type="submit"
						on:close={() => (showAdditionForm = false)}
						on:reset={handleReset}
				>Send</button>
			</div>
		</form>
	</div>
</dialog>

<style>
	dialog {
		width: 50%;
		max-width: 900px;
		border-radius: 0.5em;
		border: none;
		padding: 0;
		background: #e9e4cf;
		font-family: 'Quicksand', sans-serif;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding-left: 3em;
		padding-right: 3em;
		padding-bottom: 3em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.form {
		background-color: aliceblue;
		display: flex;
		flex-direction: column;
		padding: 2vw 4vw;
		border: none;
		border-radius: 0.3rem;
		align-content: center;
	}

	h2 {
		text-align: center;
		font-weight: 500;
	}
	.close_btn {
		position: absolute;
		height: 2vh;
		width: fit-content;
		background: none;
		border: none;
		top: 2.6%;
		right: 2.6%;
	}
	.close_btn:hover {
		cursor: pointer;
	}
	.close_img {
		height: inherit;
		width: inherit;
		--color_fill: #c69775;
	}

	.close_btn:active {
		transform: scale(0.9);
	}

	form input,
	textarea {
		border-width: 1px;
		border-color: #c69775;
		border-style: solid;
		margin: 10px 0;
		padding: 18px;
		background-color: rgb(237, 246, 253);
		/* outline: none; */
		/* background: aliceblue; */
		font-size: 16px;
		border-radius: 10px;
		resize: vertical;
	}
	form input:focus,
	textarea:focus {
		outline: none;
		border: 2px solid #da9341;
	}

	form input:invalid:focus,
	textarea:invalid:focus {
		background: #ffe4dc;
		border: 2px solid #dc572f;
		outline: none;
	}

	.form_button {
		padding: 15px;
		font-size: 1rem;
		outline: none;
		cursor: pointer;
		width: 100%;
		font-weight: bold;
		margin: 20px auto 0;
		border-radius: 30px;
		transition: all 0.3s ease-in;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		gap: 1vh;
	}
	.reset {
		background: #ffe4dc;
		color: #dc572f;
		border: 1px solid #dc572f;
	}
	.submit {
		background: #e3f4ff;
		color: #49abed;
		border: 1px solid #49abed;
	}

	.reset:hover {
		border: 1px solid #db643f;
		background: #db643f;
		color: white;
	}
	.submit:hover {
		border: 1px solid #91cbf2;
		background: #91cbf2;
		color: white;
	}
</style>
