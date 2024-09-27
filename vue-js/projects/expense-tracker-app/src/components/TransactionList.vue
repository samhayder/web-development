<script setup>
	import { inject } from "vue";

	const transactions = inject("transactions");

	const emit = defineEmits(['removeData'])

	const formRemoveData = (id) => {
		emit("removeData", id)
	}
</script>

<template>
	<div>
		<h3>History</h3>
		<ul id="list" class="list">
			<li
				v-for="{ id, text, amount } in transactions"
				:key="id"
				:class="amount < 0 ? 'minus' : 'plus'"
			>
				{{ text }} <span>${{ amount }}</span
				><button class="delete-btn" @click="formRemoveData(id)">x</button>
			</li>
		</ul>
	</div>
</template>
