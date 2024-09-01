<template lang="">
	<div
		class="login_page w-screen h-screen bg-gray-300 flex justify-center items-center"
	>
		<div
			class="login_content_wrap w-[80vw] md:w-[50vw] h-fit bg-white shadow-lg rounded-md p-5"
		>
			<div class="grid place-content-center">
				<img
					src="../../public/img/login.png"
					alt=""
					class="object-cover h-[100px]"
				/>
				<h2 class="text-center font-bold text-2xl py-3">User Login</h2>
			</div>
			<form @submit.prevent="handleSubmit">
				<div class="form_group my-3">
					<label class="block font-semibold">Email</label>
					<input
						type="email"
						placeholder="Enter your email"
						class="input"
						v-model="formData.email"
						ref="email"
					/>
				</div>
				<div class="form_group my-3">
					<label class="block font-semibold">Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						class="input"
						v-model="formData.password"
						ref="password"
					/>
				</div>
				<button type="submit" class="btn w-full my-3">Login</button>
				<div class="login_utility flex justify-between mb-3 mt-2">
					<label> <input type="checkbox" /> Remember Me </label>
					<a href="#" class="text-cyan-400 underline font-semibold"
						>Forgot Password?</a
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					email: "",
					password: "",
				},
			};
		},

		methods: {
			handleSubmit() {
				if (!this.formData.email) {
					this.$eventBus.emit("toast", {
						type: "Error",
						message: "Please provide your email address",
					});
					this.$refs.email.focus();
					return;
				}

				if (!this.formData.password) {
					this.$eventBus.emit("toast", {
						type: "Error",
						message: "Please fill password",
					});
					this.$refs.password.focus();
					return;
				} else if (this.formData.password.length < 6) {
					this.$eventBus.emit("toast", {
						type: "Error",
						message: "Password length must be 6",
					});
					this.$refs.password.focus();
					return;
				}

				this.$eventBus.emit("toast", {
					type: "Success",
					message: "Done Successfully!",
				});
			},
		},
	};
</script>

<style lang=""></style>
