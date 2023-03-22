<script>
// @ts-nocheck

  import tree from '$lib/images/tree.svg';
  import apple from '$lib/images/apple.svg';
  import bench from '$lib/images/bench.svg';

  let notes = new Set([
    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"
  ]);

  let initiatedNotes = new Set();

  let addNewNote = () =>{
    // for(let item in notes){
    //   if(item){
    //     initiatedNotes.add(item);
    //     notes.delete(item);
    //   }
    // }
    // for(let item in notes){
    //   if(document.getElementById(item) != undefined){
    //     document.getElementById(item)?.style.visibility = 'hidden';
    //   }
    // }

  }



</script>

<section class = "relative  h-[100vh] w-[100vw]  my-10 flex justify-center items-center">
  

  <img src={tree} alt="tree" class = "overflow-hidden absolute h-[100vh] w-[100vw] " />
  <!-- ROW 1 -->
  <button type = "button"  class = "absolute cursor-pointer left-[3vw] lg:left-[11vw] top-[20vh] border border-black w-[20vw] h-[10vh] rounded-lg">
    Create a New Note
  </button>


  <img src = {apple} alt = "apple"  class = "absolute  w-[10vw] top-[2vh] lg:w-[7vw] left-[44vw] lg:top-[0%] lg:left-[46%] hover:w-[8vw]"/>

  
  <!-- ROW 2 -->
  <img src = {apple} alt = "apple" class = "absolute w-[10vw] top-[7%] lg:w-[7vw] left-[50%] lg:top-[6%]  hover:w-[8vw]"/>

  <img src = {apple} alt = "apple"class = "absolute w-[10vw] top-[7%] lg:w-[7vw] lg:left-[43%] left-[40%] lg:top-[6%]  hover:w-[8vw]"/>

  <!-- ROW 3 -->
  <img src = {apple} alt = "apple" class = "absolute w-[10vw] lg:w-[7vw] top-[15vh] left-[55%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[15vh] lg:left-[46%] left-[45%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[15vh] lg:left-[38%] left-[35%] hover:w-[8vw]"/>


  <!-- ROW 4 -->

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[23vh] lg:left-[51%] left-[50%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[23vh] lg:left-[42%] left-[40%] hover:w-[8vw]"/>

  <!-- ROW 5-->

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[32vh] left-[55%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[32vh] lg:left-[46%] left-[45%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[32vh] lg:left-[38%] left-[35%] hover:w-[8vw]"/>

  <!-- ROW 6-->

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[40vh] lg:left-[51%] left-[50%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[40vh] lg:left-[42%] left-[40%] hover:w-[8vw]"/>

  <!-- ROW 7-->

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[48vh] left-[55%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[48vh] lg:left-[46%] left-[45%] hover:w-[8vw]"/>

  <img src = {apple} alt = "apple" class = "absolute  w-[10vw] lg:w-[7vw] top-[48vh] lg:left-[38%] left-[35%] hover:w-[8vw]"/>




  <img src = {bench} alt = "bench" class = "absolute lg:w-[13vw] w-[15vw] bottom-[2vh] left-[56vw]"/>

  <div class = "absolute  left-[25%] bottom-3 w-[50%] bg-orange-800  rounded-full h-[4vh]">l</div>


 


</section>
  
  