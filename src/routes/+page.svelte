<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="bgimage" id="home">
		<h2 class="hero_title" style="color: aliceblue">Work with our inventories!</h2>
	    <p class="hero_desc">Our capacity is more than you could need!</p>
</section>

<section>
	<button class="use_web" >
		<a href="/inventory" class="btn btn-primary">Use the website</a></button>
</section>

<section id="contact">
	<div class="container mt-3 contactContent">
		<h1 class="text-center">Contact Our Company if you need a solution!</h1>

		<div class="row mt-4">
			<div class="col-lg-6">

				<div style="overflow:hidden;resize:none;max-width:100%;width:500px;height:500px;">
					<div id="my-map-canvas" style="height:100%; width:100%;max-width:100%;">
						<iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Innopolis,+Республика+Татарстан,+Россия&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
					</div>
					<a class="googl-ehtml" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="authorize-maps-data">premium bootstrap themes</a>
					<style>#my-map-canvas img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}</style></div>
			</div>

		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.bgimage {
		height:100vh;
		background: url("$lib/images/bg.jpeg");
		background-size:cover;
		position:relative;
	}
	.hero_title {
		font-size: 4.5rem;
	}
	.hero_desc {
		font-size: 2rem;
	}
	.use_web {
		background: #ffe4dc;
		color: #dc572f;
		border: 1px solid #dc572f;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
	.hero-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
	.imageAboutPage {
		width: 100%;
	}


</style>
