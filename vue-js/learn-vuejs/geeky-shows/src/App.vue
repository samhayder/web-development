<script setup>
	import CustomInput from "./components/CustomInput.vue";
	import { ref } from "vue";

	const name = ref("");
	const email = ref("");
</script>

<template>
	<div class="w-[80vw] mx-auto py-5">
		<CustomInput v-model="name" /> <br />
		<CustomInput v-model="email" />
	</div>
</template>

<style>
	a {
		color: blue;
	}
	button {
		padding: 5px 10px;
		border: 1px solid;
	}
</style>
