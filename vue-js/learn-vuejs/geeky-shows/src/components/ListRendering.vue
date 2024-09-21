<script setup>
	import { ref, reactive, computed } from "vue";

	// Array of String
	const students = ref(["Samsuddin", "Yasin", "Jannat"]);

	// Array of Object
	const employees = ref([
		{ name: "A", salary: 10000 },
		{ name: "B", salary: 20000 },
		{ name: "C", salary: 30000 },
	]);

	// Array of Array
	const users = reactive([
		["A", "Admin"],
		["B", "Reader"],
		["C", "Writer"],
	]);

	// Object in Objects
	const userDetails = reactive({
		user1: {
			id: 1,
			role: "Admin",
			detail: "This is the admin post",
		},
		user2: {
			id: 2,
			role: "Writer",
			detail: "This is the writer post",
		},
		user3: {
			id: 3,
			role: "Reader",
			detail: "This is the reader post",
		},
	});

	// Computed Property
	const bigSalary = computed(() => {
		let a = employees.value.filter(({ salary }) => {
			salary > 10001;
		});
		console.log(a);
	});
</script>

<template>
	<div>
		<!-- Array of String -->
		<p v-for="(student, index) in students" :key="index">
			{{ index + 1 }}- {{ student }}
		</p>

		<!-- Array of Objects -->
		<div v-for="({ name, salary }, index) in employees" :key="index">
			<p>{{ name }} {{ salary }}</p>
		</div>

		<!-- Array of Array -->
		<div v-for="(user, index) in users" :key="index" class="flex gap-3">
			<!-- <p>{{ user }}</p> -->
			<p v-for="(item, i) in user" :key="i">{{ item }}</p>
		</div>

		<!-- Objects in Objects -->
		<ul v-for="({ id, role, detail }, index) in userDetails" :key="index">
			<li>{{ id }} {{ role }} {{ detail }}</li>
		</ul>

		<!-- v-for range -->
		<div v-for="n in 6" :key="n">
			<p>Heading {{ n }}</p>
		</div>

		<p>v-for Computed Property</p>
		<p v-for="(employee, i) in bigSalary" :key="i">
			{{ employee.name }}
		</p>
	</div>
</template>
