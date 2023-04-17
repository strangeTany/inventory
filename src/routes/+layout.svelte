<script>
	import Header from "../lib/components/Header.svelte";
	import './styles.css';
	
</script>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&family=Rubik:wght@300;400;500&display=swap" rel="stylesheet">
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>made by Banana Team</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		font-family:'Rubik', sans-serif;
		letter-spacing: 0.02em;
		color: #3C4044;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 75vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		opacity: 50%;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
