<script>
	import leaf1 from '$lib/images/leaf1.svg';
	import { fade,scale } from 'svelte/transition'
	import './app.css';


</script>
<section in:fade out:fade on:introstart  on:outrostart on:introend on:outroend class = "h-[90vh] grid grid-rows-3 content-center">
	<div class ="">
		<div class = "flex m-[3vw] flex-wrap">
			<div class="w-[100%] text-2xl font-semibold">Welcome To Forest Code</div>
			<div>
				Hello World!Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
		</div>
	</div>

	<div class = " flex justify-center space-x-4 mt-5">
		<a href = "/newPage" class="w-[40%] h-[40%] border bg-slate-300 hover:bg-slate-400 font-bold py-5 px-4 rounded-full text-black">
		<button class = "w-[100%] h-[100%]">
			Make a New Note
		</button>
		</a>
		<a href = "/about" class="w-[40%] h-[40%] border bg-slate-300 hover:bg-slate-400 font-bold py-5 px-4 rounded-full text-black">
		<button class = "w-[100%] h-[100%]">
			About Us
		</button>
		</a>
	</div>
	<div class = " flex justify-center items-end">
		<picture>
			<img src={leaf1} alt="starter image" class = "w-[100%]" />
		</picture>
	</div>
</section>

