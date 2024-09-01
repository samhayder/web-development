<template lang="">
	<div>
		<Login></Login>

		<div class="absolute top-5 right-5 z-50">
			<Toast
				v-for="(toast, i) in toasts"
				:key="i"
				:toastType="toast.type"
				:toastMessage="toast.message"
			></Toast>
		</div>
	</div>
</template>

<script>
	import Login from "./components/Login.vue";
	import Toast from "./components/Toast.vue";

	export default {
		data() {
			return {
				toasts: [
					/* {
						type: "Success",
						message: "Done Successfully!",
					},
					{
						type: "Error",
						message: "Something went wrong!",
					}, */
				],
			};
		},

		components: {
			Login,
			Toast,
		},

		mounted() {
			this.$eventBus.on("toast", (data) => {
				this.toasts.push(data);
				this.removeToast();
			});
		},

		methods: {
			removeToast() {
				setTimeout(() => {
					this.toasts.shift();
				}, 2000);
			},
		},
	};
</script>

<style lang=""></style>
