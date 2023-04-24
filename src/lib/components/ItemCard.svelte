<script lang="ts">
	import type { Item } from '../../routes/item';
	import DeleteCard from './DeleteCard.svelte';
	export let item: Item;
</script>

<div class="card_container">
	<a class="card" href="../item/{item.id}">
		<span class="card_content">
			<h3 class="item_title">{item.name}</h3>
			<p class="item_description">{item.description}</p>
			<span class="card_footer">
				<p class="item_price">{item.price}$</p>
				<p class="item_amount">{item.amount}</p>
			</span>
		</span>
	</a>
	<DeleteCard />
</div>

<style>
	.card_container {
		position: relative;
	}
	.card {
		position: relative;
		display: grid;
		background-color: aliceblue;
		padding-bottom: 10px;
		padding-left: 20px;
		padding-right: 20px;
		box-shadow: 3px 3px 3px rgb(206, 178, 154);
		text-decoration: none;
		color: #2e2e2e;
	}
	/* .card :hover{
    transform: scale(.98);
} */
	.card :active {
		transform: scale(0.98);
	}
	.card_content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.item_price {
		margin: 0;
	}
	.item_amount {
		margin: 0;
		position: static;
		text-align: right;
	}
	.card_footer {
		display: flex;
		transform: inherit;
		bottom: 0;
		justify-content: space-between;
	}
	.item_description {
		transform: inherit;
	}
	.item_title {
		transform: inherit;
	}
</style>
