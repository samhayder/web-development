<script setup>
import {reactive, ref} from "vue";

const num = reactive({a:10, b:20});
setTimeout(() => {
  /* console.log("num", num);
  console.log("a", num.a);
  console.log("b", num.b); */
  num.a = 50;
  num.b = 70;
}, 2000);

// ref()
let a = ref(5);
let b = ref(8);
setTimeout(() => {
  /* console.log("a", a);
  console.log("a.value", a.value);
  console.log("b", b);
  console.log("b.value", b.value); */
  a.value = 23;
  b.value = 29;
}, 2000);
</script>

<template>
  <div>
    <p>Reactive Sum: {{ num.a + num.b }}</p> <br><br>

    <p>Ref Sum {{ a + b }}</p>
  </div>
</template>