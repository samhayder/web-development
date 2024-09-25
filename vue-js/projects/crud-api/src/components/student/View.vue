<script setup>
	import { onMounted } from "vue";
	import { RouterLink, useRoute } from "vue-router";
	import { UserPlusIcon, ListBulletIcon } from "@heroicons/vue/24/outline";
	import useStudent from "../../composable/studentAPI";
	const { studentData, error, showSingleStudent } = useStudent();
	const { params } = useRoute();

	onMounted(async () => {
		await showSingleStudent(params.id);
	});
</script>

<template>
	<div>
		<header>
			<span></span>
			<h2 class="font-bold text-3xl leading-[80px]">Single Student Details</h2>
			<RouterLink :to="{ name: 'list' }">
				<button class="route_btn text-white">
					<ListBulletIcon class="w-6 h-6" />
				</button>
			</RouterLink>
		</header>

		<table>
			<thead>
				<tr>
					<td>No</td>
					<td>Name</td>
					<td>Email</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-center">{{ studentData.id }}</td>
					<td>{{ studentData.name }}</td>
					<td>{{ studentData.email }}</td>
				</tr>
			</tbody>
		</table>

		<RouterLink :to="{ name: 'add' }" class="flex justify-center">
			<button class="bg-violet-700 text-white hover:bg-green-700 px-8">
				<UserPlusIcon class="w-6 h-6 text-white" />
			</button>
		</RouterLink>
	</div>
</template>

<style scoped>
	header {
		@apply text-center border-b border-pink-500 flex justify-around items-center;
	}
	.route_btn {
		@apply bg-pink-700  hover:bg-green-500;
	}

	table {
		@apply table-auto w-[90vw] md:w-[80vw] mx-auto my-5;
	}
	table thead {
		@apply text-center bg-emerald-500 text-white font-bold;
	}
	table thead td {
		@apply py-3 border;
	}
	table tbody td {
		@apply p-2 border border-cyan-200;
	}
</style>
