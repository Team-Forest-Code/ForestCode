<script>
	import Header from './Header.svelte';
	import './app.css';
	import './styles.css';
</script>

<!-- <div class = "sm:invisible font-bold text-red-800 flex justify-center ">
	Mobile View is not supported for this website. Please view in bigger screen.

</div> -->
<div class="app sm:visible invisible">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p></p>
	</footer>
</div>

<style>
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
