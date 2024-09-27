<script setup>
	import Header from "./components/Header.vue";
	import Balance from "./components/Balance.vue";
	import IncomeExpense from "./components/IncomeExpense.vue";
	import TransactionList from "./components/TransactionList.vue";
	import AddTransaction from "./components/AddTransaction.vue";
	import { useToast } from "vue-toast-notification";
	const toast = useToast();

	import { ref, provide, computed, onMounted } from "vue";

	const transactions = ref([
		/* { id: 1, text: "Flower", amount: -20 } */
	]);
	provide("transactions", transactions);

	// Set Local Storage
	onMounted(() => {
		const saveData = JSON.parse(localStorage.getItem("transactions"));

		if (saveData) {
			transactions.value = saveData;
		}
	});

	// Save Data by Local Storage
	const saveDataLocalStorage = () => {
		localStorage.setItem("transactions", JSON.stringify(transactions.value));
	};

	// get total income
	const total = computed(() => {
		return transactions.value.reduce((acc, transaction) => {
			return acc + transaction.amount;
		}, 0);
	});
	provide("total", total);

	// get income
	const income = computed(() => {
		return transactions.value
			.filter((transaction) => transaction.amount > 0)
			.reduce((acc, transaction) => {
				return acc + transaction.amount;
			}, 0)
			.toFixed(2);
	});
	provide("income", income);

	// get expense
	const expense = computed(() => {
		return transactions.value
			.filter((transaction) => transaction.amount < 0)
			.reduce((acc, transaction) => {
				return acc + transaction.amount;
			}, 0)
			.toFixed(2);
	});
	provide("expense", expense);

	// Handle Submit Form
	const handleSubmitForm = (formData) => {
		transactions.value.push({
			id: generateUniqueId(),
			text: formData.text,
			amount: formData.amount,
		});

		saveDataLocalStorage();

		toast.success("Transaction added successfully", { position: "top-right" });
	};

	// Generate Unique Id
	const generateUniqueId = () => {
		return Math.floor(Math.random() * 1000);
	};

	// Handle Remove Data
	const handleRemoveData = (id) => {
		transactions.value = transactions.value.filter(
			(transaction) => transaction.id !== id
		);

		saveDataLocalStorage();

		toast.success("Successfully Remove Data", { position: "top-right" });
	};
</script>

<template>
	<div>
		<Header />

		<div class="container">
			<Balance />
			<IncomeExpense />
			<TransactionList @remove-data="handleRemoveData" />
			<AddTransaction @form-submitted="handleSubmitForm" />
		</div>
	</div>
</template>
