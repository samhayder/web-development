<template lang="">
	<div
		class="toast_wrapper w-[50vw] md:w-[30vw] h-fit bg-white shadow-lg rounded-lg mb-3"
	>
		<div
			class="toast_header flex justify-between p-2 rounded-t-md text-xl font-bold"
			:class="['bg-green-300 text-blue-800', 'toast__' + toastType]"
		>
			<p>{{ toastType }}</p>
			<p class="cursor-pointer">X</p>
		</div>
		<div class="toast_body p-3">
			<p class="italic">{{ toastMessage }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			toastType: {
				type: String,
				default: "Success",
			},
			toastMessage: {
				type: String,
				default: "Toast Message",
			},
		},
		data() {
			return {};
		},
	};
</script>

<style>
	.toast__Error {
		background: rgb(243, 127, 127);
		color: red;
	}
</style>
