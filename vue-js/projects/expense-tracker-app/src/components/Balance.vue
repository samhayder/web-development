<script setup>
import { inject } from "vue";
const total = inject("total");
</script>

<template>
	<div>
		<h4>Your Balance</h4>
		<h1 id="balance">${{total}}</h1>
	</div>
</template>
