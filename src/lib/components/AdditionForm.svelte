<script lang="ts">
	import cross from '$lib/images/cross.svg';
	export let showAdditionForm: boolean; // boolean
	let dialog: HTMLDialogElement; // HTMLDialogElement
	$: if (dialog && showAdditionForm) dialog.showModal();
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
		<form>
			<div class="form">
				<input type="text" id="name" placeholder="Item" required />
				<input type="text" id="id" placeholder="Item's ID" required />
				<input type="number" id="price" placeholder="Price" min="0" step="0.01" required />
				<input
					type="number"
					id="integer"
					placeholder="Amount"
					pattern="[0-9]"
					min="1"
					step="1"
					required
				/>
				<input type="text" id="vendor" placeholder="Vendor's name" required />
				<textarea id="message" rows="4" placeholder="Description" required />
			</div>

			<div class="buttons">
				<button class="form_button reset" type="reset">Reset</button>
				<button class="form_button submit" type="submit">Send</button>
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
		padding: 20px;
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
