<script>
	import leaf1 from '$lib/images/leaf1.svg';
	import { fade,scale } from 'svelte/transition'
	import './app.css';


</script>
<section class = "h-[85vh]  px-[8vw] py-[2vh]  grid grid-rows-3 content-center gap-y-[2vh] md:mb-[10vh]">
	<div class ="">
		<div class = "flex text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] flex-wrap">

			<div class="w-[100%] font-semibold pb-4 mt-4">Welcome To Forest Code</div>

			<div>
				Writing code in plain paper can be difficult, inefficient, and terrible for the environment.
				Not only does paper production account for 26% of total waste, but it also causes deforestation, air pollution, and waste problems.
				Forest Code aims to solve these problems. We provide a platform for you to write code in a more efficient and environmentally friendly way.
				We hope that you will enjoy using our platform and help us save the environment! We currently support C++, Java, Python, and Javascript. 
				Sign up to create a new Notebook and start writing code!
			</div>
		</div>
	</div>

	<div class = " flex justify-center items-center space-x-4  text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] ">
		<a href = "/newPage" class="w-[40%] h-[40%] border bg-slate-300 hover:bg-slate-400 font-bold py-5 px-4 rounded-full text-black">
		<button class = "w-[100%] h-[100%]">
			Make a New Note
		</button>
		</a>
		<a href = "/us" class="w-[40%] h-[40%]  bg-slate-300 hover:bg-slate-400 font-bold py-5 px-4 rounded-full text-black">

		<button class = "w-[100%] h-[100%]">
			About Us
		</button>
		</a>
	</div>

	<div class = "flex justify-center">
		<picture>
			<img src={leaf1} alt="starter image" class = "w-[30vw] md:w-[20vw]" />
		</picture>
	</div>
</section>

