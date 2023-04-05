<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/banana-2.svg';
	import github from '$lib/images/github.svg';
</script>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500" rel="stylesheet">
<header>
	<div class="corner">
			<img src={logo} alt="Banana" /> 
			<p> Banana</p>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/item_collection' ? 'page' : undefined}>
				<a href="/item_collection">Item Collection</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
		
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		border-bottom: solid 1px;
		margin-left: 2%;
		margin-right: 2%;
		font-family: 'Quicksand', sans-serif;
		font-weight: 400;
	}

	.corner {
		display: flex;
		width: 3em;
		height: 3em;
		padding-top: 10px;
		padding-left: 6px;
	}

	.corner img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5em;
		height: 2.5em;
		object-fit: contain;
	}
	.corner p{
		margin-top: 1px;
		margin-left: 7px;
		font-size: 17pt;
	}

	nav {
		margin-top: 6px;
		display: flex;
		justify-content: center;
	}


	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		font-size: 13pt;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		
		left: calc(50% - var(--size));
	}
	li[aria-current='page']{
		font-size: 15pt;
		font-weight: 500;
		padding-bottom: 2px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font: inherit;

		color: #3C4044;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #ca7a12;
	}
</style>
