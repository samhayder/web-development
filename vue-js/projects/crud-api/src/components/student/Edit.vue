<script setup>
	import { RouterLink } from "vue-router";
	import { ListBulletIcon, BookmarkIcon } from "@heroicons/vue/24/outline";

	function updateForm() {
		console.log("Update form");
	}
</script>

<template>
	<div>
		<header>
			<span></span>
			<h2 class="font-bold text-3xl leading-[80px]">Edit Single Student</h2>
			<RouterLink :to="{ name: 'list' }">
				<button class="route_btn text-white">
					<ListBulletIcon class="w-6 h-6" />
				</button>
			</RouterLink>
		</header>

		<form @submit.prevent="updateForm" class="w-[75vw] mx-auto p-5 shadow-md">
			<div class="form_group flex items-center my-2">
				<label for="ID">ID:</label>
				<input type="text" id="ID" readonly disabled />
			</div>
			<div class="form_group flex items-center my-2">
				<label for="name">Name:</label>
				<input type="text" id="name" required />
			</div>
			<div class="form_group flex items-center my-2">
				<label for="email">Email:</label>
				<input type="email" id="email" required />
			</div>

			<div class="control_button mt-8 flex justify-center">
				<button
					type="submit"
					class="bg-violet-700 text-white hover:bg-green-700 w-full md:w-[50vw] flex justify-center gap-2"
				>
					Save
					<BookmarkIcon class="w-6 h-6" />
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
