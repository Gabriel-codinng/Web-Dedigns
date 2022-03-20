<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

// DOM Element references
const headingImg = ref();
const heading = ref();

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

// heading.addEventListener('mouseover', floatUp);
</script>

<template>
  <div class="col-start-3 col-end-12">
    <div ref="heading" class="flex">
      <div>
        <h1
          class="mt-32 capitalize text-9xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
        >
          Welcome to Control Departments
        </h1>
      </div>
      <div>
        <img ref="headingImg" src="../assets/image/Documents-bro.png" alt="" />
      </div>
    </div>

    <section>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
      <p>
        Esse veniam id proident laborum sit exercitation et laborum nisi nulla. Non
        ullamco est ea consectetur velit. Elit cillum enim laborum quis aliqua sunt fugiat
        exercitation velit non. Nostrud commodo officia occaecat aliquip cillum
        adipisicing et minim occaecat. Veniam laboris mollit ad amet cupidatat esse
        exercitation. Cillum adipisicing nulla in culpa mollit anim quis incididunt. Magna
        anim aliqua esse enim ex cupidatat commodo et incididunt.
      </p>
    </section>
  </div>
</template>
