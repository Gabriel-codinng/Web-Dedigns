<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

// DOM Element references
const heading = ref();
const headingImg = ref();

onMounted(() => {
  /*****************************************************************************************************************************/
  /*--------------------------------------------------------- ANIMATIONS ------------------------------------------------------*/
  /*****************************************************************************************************************************/

  function fade() {
    anime({
      targets: [heading.value],
      opacity: 0,
      duration: 800,
      loop: 1,
      easing: "linear",
      direction: "reverse",
    });
  }

  function floatUp() {
    anime({
      targets: [headingImg.value],
      duration: 1000,
      delay: 20,
      direction: "alternate",
      //infinite loop
      loop: true,
      endDelay: 10,
      easing: "easeInOutSine",

      translateY: 20,
    });
  }

  fade();
  floatUp();
  /*****************************************************************************************************************************/
  /*--------------------------------------------------------- END ANIMATIONS ------------------------------------------------------*/
  /*****************************************************************************************************************************/
});
</script>

<template>
  <div class="col-start-3 col-end-12">
    <section ref="heading">
      <div class="flex flex-row items-center">
        <div>
          <img
            ref="headingImg"
            class="h-[40rem] w-[80rem]"
            src="../assets/image/About us page-pana(1).png"
            alt=""
          />
        </div>
        <div>
          <h1
            class="mt-32 text-9xl font-bold text-transparent ml-10 bg-gradient-to-r bg-clip-text from-green-500 to-blue-500"
          >
            About us and our work
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
#h1 {
  background-color: green;
}
</style>
