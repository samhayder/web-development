<script setup>
	import { RouterLink } from "vue-router";
	import {
		EyeIcon,
		PencilIcon,
		TrashIcon,
		UserPlusIcon,
	} from "@heroicons/vue/24/outline";

	import useStudent from "../../composable/studentAPI";
	import { onMounted } from "vue";
	const { studentData, error, getStudentsList } = useStudent();
	// call all students list
	onMounted(getStudentsList);

	const trashStudentData = async (id) => {
		if (!window.confirm("Are you remove this data")) {
			return;
		}
		console.log("Removed");
	};
</script>

<template>
	<div>
		<header>
			<h2 class="font-bold text-3xl leading-[80px]">Student List</h2>
			<RouterLink :to="{ name: 'add' }">
				<button>
					<UserPlusIcon class="w-6 h-6 text-white" />
				</button>
			</RouterLink>
		</header>

		<table>
			<thead>
				<tr>
					<td>No</td>
					<td>Name</td>
					<td>Email</td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="({ name, email, id }, i) in studentData" :key="i">
					<td class="text-center">{{ ++i }}</td>
					<td>{{ name }}</td>
					<td>{{ email }}</td>
					<td class="flex justify-center gap-4">
						<RouterLink :to="{ name: 'view', params: { id: id } }">
							<div class="group relative">
								<span class="icon_btn_message">View</span>
								<EyeIcon class="icon_btn" />
							</div>
						</RouterLink>

						<RouterLink :to="{ name: 'edit', params: { id: id } }">
							<div class="group relative">
								<span class="icon_btn_message">Edit</span>
								<PencilIcon class="icon_btn" />
							</div>
						</RouterLink>

						<div class="group relative">
							<span class="icon_btn_message">Trash</span>
							<TrashIcon
								class="icon_btn text-red-500"
								@click="trashStudentData(id)"
							/>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
	header {
		@apply text-center border-b border-pink-500 relative h-[80px];
	}
	button {
		@apply bg-pink-700 absolute top-1/2 right-[5vw] -translate-y-[50%] hover:bg-green-500;
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

	.icon_btn {
		@apply w-6 h-6 cursor-pointer hover:text-pink-600 hover:border hover:border-pink-600 delay-300;
	}
	.icon_btn_message {
		@apply hidden absolute -top-8 bg-pink-500 text-white p-1 group-hover:block;
	}
</style>
