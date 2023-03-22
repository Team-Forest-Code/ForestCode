<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	let showMenu = false;

	function toggleNavbar() {
	showMenu = !showMenu;
	}


</script>

<header>
	<nav class="bg-gray-800">
		<div class="bg-[#5f946d]">
			<nav
			  class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
			>
			  <div class="flex items-center justify-between">
				<a
				  class="text-xl font-bold text-gray-100 md:text-2xl hover:text-[#3e363f]"
				  href="/"
				  >
				  Forest Code
				</a>
				<!-- Mobile menu button -->
				<div on:click={toggleNavbar} class="flex lg:hidden">
				  <button
					type="button"
					class="text-gray-100 hover:text-[#3e363f] focus:outline-none focus:text-gray-400"
				  >
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  fill="none"
					  viewBox="0 0 24 24"
					  stroke-width="1.5"
					  stroke="currentColor"
					  class="w-6 h-6"
					>
					  <path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					  />
					</svg>
				  </button>
				</div>
			  </div>
		
			  <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			  <div
				class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
				  ? 'flex'
				  : 'hidden'}"
			  >
				<a class="text-gray-100 hover:text-[#3e363f]" href="/">Home</a>
				<a class="text-gray-100 hover:text-[#3e363f]" href = "/newPage"
				  >Make A Note</a
				>
				<a class="text-gray-100 hover:text-[#3e363f]" href="/about">About Us</a>
				<a class="text-gray-100 hover:text-[#3e363f]" href = "./random">Random</a>
				<div class="space-y-2">
				  <a
					href="/login"
					class="py-3 px-4 text-center border text-gray-800 bg-white hover:text-[#3e363f] rounded-md block lg:inline lg:border-0"
				  >
					Login
				  </a>
				  <a
					href="/signup"
					class="py-3 px-4 text-center text-white bg-amber-700 hover:text-[#3e363f] rounded-md shadow block lg:inline"
				  >
					Sign Up
				  </a>
				</div>
			  </div>
			</nav>
		  </div>
	  </nav>

	<!-- <nav class = "border-b-2 border-black h-[8vh] w-[100vw] flex justify-between px-[8vw]">
		<div class = "border-r border-black  p-8">Forest Code</div>
		<ul class = "flex justify-around"> 
			<li class = "border border-black p-8">
				Home
			</li>
			<li class = "border border-black p-8">
				About Us
			</li>

		</ul>
		<div class = "border-x-1 border-black p-8">Log in/Sign up</div>
	

	</nav> -->
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
	/* header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
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
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
