<script setup>
	import { ref, reactive } from "vue";

	const bg = ref("pink");
	const btn = reactive({
		color: "white",
		backgroundColor: "black",
		padding: "5px 20px",
		borderRadius: "10px",
	});
</script>

<template>
	<div>
		<h1 style="color: red; background-color: green">Normal Style</h1>
		<br />
		<h1 :style="{ color: 'red', backgroundColor: 'green' }">Binding Style</h1>
		<br />
		<h1 :style="{ color: 'red', backgroundColor: bg }">Binding Style ref</h1>
		<br />

		<button :style="btn">Binding Style Object</button>
	</div>
</template>
