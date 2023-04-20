<script lang="ts">
	import logo from '$lib/images/banana.svg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About Us</h1>

	<div class="container">
		<div>
			<p class="app_description">Banana — service for inventory management.</p>
		</div>

		<div>
			<div class="profile">
				<img src={logo} class="pictures-us" alt="pokemon-one" />
				Name Surname
			</div>
			<span class="loren">
				Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
			</span>
			<div>
				<div class="profile">
					<img src={logo} class="pictures-us" alt="pokemon-two" />
					Name Surname
				</div>
				<span class="loren"
					>Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
				</span>
			</div>
		</div>

		<div>
			<div class="profile">
				<img src={logo} class="pictures-us" alt="pokemon-three" />
				Name Surname
			</div>
			<span class="loren"
				>Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
			</span>
			<div>
				<div class="profile">
					<img src={logo} class="pictures-us" alt="pokemon-four" />
					Name Surname
				</div>
				<span class="loren">
					Lorem ipsum dolor sit amet consectetur. Cras eu orci et adipiscing cursus.
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-weight: 400;
	}
	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
		margin-left: 30px;
		width: 90%;
		align-content: center;
		justify-content: space-between;
		align-items: normal;
	}

	.pictures-us {
		width: 80px;
		height: 80px;
		border-radius: 80px;
		background-color: #ceb29a;
	}

	.profile {
		display: flex;
		flex-direction: row;
		align-items: center;
		/*padding: 0;*/
		text-align: center;
		gap: 8px;
		/*width: 550px;*/
		height: 80px;
		font-size: 1.4em;
	}

	.loren {
		font-size: 1.1em;
		font-weight: 400;
		width: 530px;
		height: 50px;
		/*line-height: 28px;*/
	}
	.app_description {
		font-size: 1.6em;
		font-weight: 300;
		margin-right: 2em;
	}
</style>
