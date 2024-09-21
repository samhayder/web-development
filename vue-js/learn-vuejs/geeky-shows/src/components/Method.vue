<script setup>
	import { ref, computed } from "vue";

	let firstName = ref("Samsuddin");
	let lastName = ref("Hayder");

	const fullName = () => {
		console.log("called method");
		return firstName.value + " " + lastName.value;
	};

	// Computed property
	const printNameByComputed = computed(() => {
		console.log("computed called");
		return firstName.value + " " + lastName.value;
	});

	// Computed by set & get
	const nameSetterAndGetter = computed({
		get() {
			console.log("get called");
			return firstName.value + " " + lastName.value;
		},

		set(newValue) {
			console.log("set called");
			[firstName, lastName] = newValue.split(" ");
		},
	});

	setTimeout(() => {
		console.log("setTimeout called");
		firstName.value = "Yasin";
	}, 2222);
</script>

<template>
	<div>
		<h1>{{ fullName() }}</h1>
		<h1>{{ printNameByComputed }}</h1>
		<h1>{{ nameSetterAndGetter }}</h1>
	</div>
</template>
