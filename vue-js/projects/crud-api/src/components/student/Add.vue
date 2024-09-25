<script setup>
	import { reactive } from "vue";
	import { RouterLink } from "vue-router";
	import { PlusIcon, ListBulletIcon } from "@heroicons/vue/24/outline";
	import useStudent from "../../composable/studentAPI";
	import swal from "sweetalert";

	const { studentData, error, statusCode, createStudent } = useStudent();

	const formData = reactive({
		name: "",
		email: "",
	});

	const handleForm = async () => {
		await createStudent(formData);

		if (statusCode.value === 201) {
			swal("Good job!", "Successfully added student data", "success", {
				timer: 2000,
			});
		} 
		else {
			swal("Oops!", error.value, "error");
		}

		document.querySelector("#form_submitted").reset();
	};
</script>

<template>
	<div>
		<header>
			<span></span>
			<h2 class="font-bold text-3xl leading-[80px]">Add Student</h2>
			<RouterLink :to="{ name: 'list' }">
				<button class="route_btn text-white">
					<ListBulletIcon class="w-6 h-6" />
				</button>
			</RouterLink>
		</header>

		<form
			@submit.prevent="handleForm"
			class="w-[75vw] mx-auto p-5 shadow-md"
			id="form_submitted"
		>
			<div class="form_group flex items-center my-2">
				<label for="name">Name:</label>
				<input
					type="text"
					id="name"
					placeholder="Write your name"
					v-model="formData.name"
					required
				/>
			</div>
			<div class="form_group flex items-center my-2">
				<label for="email">Email:</label>
				<input
					type="email"
					id="email"
					placeholder="Write your email"
					v-model="formData.email"
					required
				/>
			</div>

			<div class="control_button mt-8 flex justify-center">
				<button
					type="submit"
					class="bg-violet-700 text-white hover:bg-green-700 w-full md:w-[50vw] flex justify-center gap-2"
				>
					Add
					<PlusIcon class="w-6 h-6" />
				</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
	header {
		@apply text-center border-b border-pink-500 flex justify-around items-center;
	}
	.route_btn {
		@apply bg-pink-700  hover:bg-green-500;
	}

	label {
		@apply font-semibold w-2/12;
	}

	input {
		@apply border border-violet-500 rounded-md px-3 py-1 w-full focus:outline-green-400;
	}
</style>
