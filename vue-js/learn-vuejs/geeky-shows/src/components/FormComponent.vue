<script setup>
	import { ref, reactive } from "vue";

	const formData = reactive({
		name: "",
		email: "",
		password: "",
		gender: "",
		phone: "",
		emergencyContact: "",
		parking: "",
		roomPreference: [],
		restrictions: [],
		nationality: "",
		address: ``,
	});
</script>

<template>
	<div>
		<form>
			<div class="py-2">
				<label>name</label>
				<input type="text" v-model.trim="formData.name" />
			</div>
			<div class="py-2">
				<label>email</label>
				<input type="email" v-model.trim="formData.email" />
			</div>
			<div class="py-2">
				<label>gender</label>
				<input type="radio" v-model="formData.gender" value="Male" />
				<label>Male</label>
				<input type="radio" v-model="formData.gender" value="Female" />
				<label>Female</label>
			</div>
			<div class="py-2">
				<label>phone</label>
				<input type="text" v-model.number="formData.phone" />
			</div>
			<div class="py-2">
				<label>emergency Contact</label>
				<input type="text" v-model.number="formData.emergencyContact" />
			</div>
			<div class="py-2">
				<label>Do you require parking?</label>
				<input type="radio" v-model="formData.parking" value="Yes" />
				<label>Yes</label>
				<input type="radio" v-model="formData.parking" value="No" />
				<label>No</label>
			</div>
			<div class="py-2">
				<label>what is your room preference?</label> <br />
				<input
					type="checkbox"
					value="Single Room"
					v-model="formData.roomPreference"
				/>
				<label>Single Room</label>
				<br />
				<b></b>
				<input
					type="checkbox"
					value="Shared Room"
					v-model="formData.roomPreference"
				/>
				<label>Shared Room</label> <br />
				<input
					type="checkbox"
					value="No Room Needed"
					v-model="formData.roomPreference"
				/>
				<label>No Room Needed</label>
			</div>
			<div class="py-2">
				<label>address</label>
				<textarea v-model.trim="formData.address"></textarea>
			</div>
			<div class="py-2">
				<label>Nationality</label>
				<select
					name="nationality"
					id="nationality"
					v-model="formData.nationality"
				>
					<option value="" disabled>Select any one</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="India">India</option>
				</select>
			</div>

			<button type="submit">Submit</button>
		</form>

		<pre>{{ formData }}</pre>
	</div>
</template>

<style>
	input,
	textarea {
		@apply py-1 px-2 border border-gray-800;
	}
	label {
		@apply pr-5 capitalize;
	}
</style>
