<script setup>
	import { computed } from "vue";

	const props = defineProps(["modelValue"]);
	const emit = defineEmits(["update:modelValue"]);

	const value = computed({
		get() {
			return props.modelValue;
		},
		set(inputValue) {
			return emit("update:modelValue", inputValue);
		},
	});
</script>

<template>
	<div>
		<input
			type="text"
			:style="{ border: '1px solid red', padding: '5px 10px' }"
			v-model="value"
		/>
	</div>
</template>
