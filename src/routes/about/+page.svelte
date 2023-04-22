<script lang="ts">
	import Tanya from '$lib/images/tatiana-ivshina.png';
	import Sasha from '$lib/images/aleksandr-golovin.png';
	import Liza from '$lib/images/elizaveta-semenova.png';
	import Pasha from '$lib/images/pavel-baharuev.png';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About Us</h1>

	<div class="container">
		<div>
			<p class="app_description">Banana — service for inventory management. </p>
			<p class="app_description">Here you can find, check and edit different items if you need.</p>
		</div>

		<div>
			<div class="profile">
				<img src={Tanya} class="pictures-us" alt="tatiana" />
				Tatiana Ivshina
			</div>
			<div class="loren">
				<ul>
					<li>Team leader.</li>
					<li>Front-end developer.</li>
					<li>Designer and a cinnamon roll.</li>
				</ul>
			</div>
			<div>
				<div class="profile">
					<img src={Sasha} class="pictures-us" alt="alexander" />
					Aleksandr Golovin
				</div>
				<div class="loren">
					<ul>
						<li>Data Science.</li>
						<li>Front-end developer.</li>
						<li>It's me, hi, I'm your solution it's me.</li>
				</ul>
				</div>
			</div>
		</div>

		<div>
			<div class="profile">
				<img src={Liza} class="pictures-us" alt="elizaveta" />
				Elizaveta Semenova
			</div>
			<div class="loren">
				<ul>
					<li>Front-end developer.</li>
					<li>Cyber Security track.</li>
					<li>Can be your meme moderator.</li>
				</ul>
			</div>
			<div>
				<div class="profile">
					<img src={Pasha} class="pictures-us" alt="pavel" />
					Pavel Baharuev
				</div>
				<div class="loren">
					<ul>
						<li>Front-end developer.</li>
						<li>Learning Software Development.</li>
						<li>Stonks-person.</li>
				</ul>
				</div>
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
		/*gap: 1rem;*/
		grid-template-columns: repeat(3, 2fr);
		margin-left: 30px;
		width: 95%;
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
		/*width: 530px;*/
		/*height: 50px;*/
		line-height: 28px;
	}
	.app_description {
		font-size: 1.6em;
		font-weight: 300;
		margin-right: 2em;
	}
</style>
