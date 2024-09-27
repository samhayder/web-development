<script setup>
	import { ref } from "vue";
	import { useToast } from "vue-toast-notification";
	const toast = useToast();

	const text = ref("");
	const amount = ref("");
	const emit = defineEmits(["formSubmitted"]);

	const onSubmit = () => {
		if (!text.value || !amount.value) {
			toast.error("Both fields must be field", {
				position: "top-right",
			});
			return;
		}

		const formData = {
			text: text.value,
			amount: parseFloat(amount.value),
		};

		emit("formSubmitted", formData);

		// clear fields
		text.value = "";
		amount.value = "";
	};
</script>

<template>
	<div>
		<h3>Add new transaction</h3>
		<form id="form" @submit.prevent="onSubmit">
			<div class="form-control">
				<label for="text">Text</label>
				<input
					type="text"
					id="text"
					placeholder="Enter text..."
					v-model.trim="text"
					style="text-transform: capitalize"
				/>
			</div>
			<div class="form-control">
				<label for="amount"
					>Amount <br />
					(negative - expense, positive - income)</label
				>
				<input
					type="text"
					id="amount"
					placeholder="Enter amount..."
					v-model.trim="amount"
				/>
			</div>
			<button class="btn" type="submit">Add transaction</button>
		</form>
	</div>
</template>
