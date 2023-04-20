<script lang="ts">
	import bin from '$lib/images/bin.svg';
</script>

<button class="delete_button">
	<img class="delete_img" src={bin} alt="Delete" />
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
