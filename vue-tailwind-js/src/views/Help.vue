<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

// DOM Element references
const helpImg = ref();
const fadeSection = ref();

onMounted(() => {
  /*****************************************************************************************************************************/
  /*--------------------------------------------------------- ANIMATIONS ------------------------------------------------------*/
  /*****************************************************************************************************************************/

  function shake() {
    anime({
      targets: [helpImg.value],
      translateX: 10,
      direction: "alternate",
      //infinite loop
      loop: true,
    });
  }

  function fade() {
    anime({
      targets: [fadeSection.value],
      opacity: 0,
      duration: 800,
      loop: 1,
      easing: "linear",
      direction: "reverse",
    });
  }

  shake();
  fade();

  /*****************************************************************************************************************************/
  /*--------------------------------------------------------- END ANIMATIONS ------------------------------------------------------*/
  /*****************************************************************************************************************************/
});

let contacts = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>`,
    text: "by phone",
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>`,
    text: "by email",
  },
];
</script>

<template>
  <div class="col-start-3 col-end-12 mb-20">
    <div ref="helpImg" class="flex justify-center">
      <img class="h-[35rem]" src="../assets/image/Questions-bro.png" alt="" />
    </div>

    <section ref="fadeSection">
      <div class="flex flex-col justify-center items-center">
        <h1 class="underline underline-offset-8 text-8xl font-bold text-yellow-300">
          Do you need some help?
        </h1>
        <h2 class="text-5xl text-center mt-20 font-bold text-yellow-500">
          All ways to contact us
        </h2>
      </div>
    </section>
    <section class="mt-16">
      <div class="flex flex-row justify-center items-center">
        <a
          href="#"
          v-for="contact in contacts"
          class="block p-6 m-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div class="flex flex-col mb-2 justify-center items-center">
            <span v-html="contact.icon"></span>
          </div>
          <p class="text-2xl px-20 text-gray-700 dark:text-gray-400">
            {{ contact.text }}
          </p>
        </a>
      </div>
    </section>
    <!-- <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div class="grid grid-rows-2 justify-center">
            <div>
              <span v-html="contact.icon"></span>
            </div>
            <div>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {{ contact.text }}
              </p>
            </div>
          </div>
        </a> -->
  </div>
</template>

<style scoped>
#h1 {
  background-color: green;
}
</style>
