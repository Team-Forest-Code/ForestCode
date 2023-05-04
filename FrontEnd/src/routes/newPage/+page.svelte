<script>
// @ts-nocheck

  import tree from '$lib/images/tree.svg';
  import apple from '$lib/images/apple.svg';
  import bench from '$lib/images/bench.svg';

  let count = 0;
  let addApples = () => {
    console.log(count);
    count ++;
  }

</script>

<section class = "relative  h-[100vh] w-[100vw]  my-10 flex justify-center items-center">
  

  <img src={tree} alt="tree" class = "overflow-hidden absolute h-[100vh] w-[100vw] " />
  <!-- ROW 1 -->
  <button type = "button"  class = {`absolute cursor-pointer left-[3vw] lg:left-[11vw] top-[20vh] border border-black w-[20vw] h-[10vh] rounded-lg `} on:click = {addApples}>
    Create a New Note
  </button>
  <a href = "/paper" class={`${count > 0 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple"  class = "absolute  w-[10vw] top-[2vh] lg:w-[7vw] left-[44vw] lg:top-[0%] lg:left-[46%] hover:w-[8vw]"/>
  </a>

  
  <!-- ROW 2 -->
  <a href = "/paper" class={`${count > 1 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute w-[10vw] top-[7%] lg:w-[7vw] left-[50%] lg:top-[6%]  hover:w-[8vw]"/>
  </a>

  <a href = "/paper" class={`${count > 2 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple"class = "absolute w-[10vw] top-[7%] lg:w-[7vw] lg:left-[43%] left-[40%] lg:top-[6%]  hover:w-[8vw]"/>
  </a>


  <!-- ROW 3 -->
  <a href = "/paper" class={`${count > 3 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute w-[10vw] lg:w-[7vw] top-[15vh] left-[55%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 4 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[15vh] lg:left-[46%] left-[45%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 5 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[15vh] lg:left-[38%] left-[35%] hover:w-[8vw]"/>
  </a>


  <!-- ROW 4 -->
  <a href = "/paper" class={`${count > 6 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[23vh] lg:left-[51%] left-[50%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 7 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[23vh] lg:left-[42%] left-[40%] hover:w-[8vw]"/>
  </a>

  <!-- ROW 5-->
  <a href = "/paper" class={`${count > 8 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[32vh] left-[55%] hover:w-[8vw]"/>
  </a>

  <a href = "/paper" class={`${count > 9 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[32vh] lg:left-[46%] left-[45%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 10 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[32vh] lg:left-[38%] left-[35%] hover:w-[8vw]"/>
  </a>

  <!-- ROW 6-->
  <a href = "/paper" class={`${count > 11 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[40vh] lg:left-[51%] left-[50%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 12 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[40vh] lg:left-[42%] left-[40%] hover:w-[8vw]"/>
  </a>

  <!-- ROW 7-->
  <a href = "/paper" class={`${count > 13 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[48vh] left-[55%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 14 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[48vh] lg:left-[46%] left-[45%] hover:w-[8vw]"/>
  </a>
  <a href = "/paper" class={`${count > 15 ? "visible":"hidden"}`}>
    <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[48vh] lg:left-[38%] left-[35%] hover:w-[8vw]"/>
  </a>



  <img src = {bench} alt = "bench" class = "absolute lg:w-[13vw] w-[15vw] bottom-[2vh] left-[56vw]"/>

  <div class = "absolute  left-[25%] bottom-3 w-[50%] bg-orange-800  rounded-full h-[4vh]">l</div>

</section>