<script setup>
  const idName = "wrapper";
  const className = "container";
  const link = "https://www.google.com"
  const img = "https://pixlr.com/images/generator/photo-generator.webp"

  // Dynamic Attribute
  const attrs = {
    id: "dynamic-id",
    class: "dynamic-class",
    href: link
  }

  // Dynamic Argument
  const attrName = 'href'
  const attrImg = 'src'

  // Boolean Attribute
  const isDisable = true;

</script>

<template>
  <div>
    <p :id="idName">Mani wrapper div</p>
    <p :class="className">class container</p>
    <a :href="link">visit</a> <br><br>

    <p>... Dynamic Attribute ...</p>
    <a v-bind="attrs">Dynamic link</a> <br><br>

    <p>... Dynamic Argument ...</p>
    <a :[attrName]="link">Dynamic Argument</a>
    <img :[attrImg]="img"> <br><br>

    <p>... Boolean Attribute ...</p>
    <button :disabled="isDisable">Click</button>

  </div>
</template>