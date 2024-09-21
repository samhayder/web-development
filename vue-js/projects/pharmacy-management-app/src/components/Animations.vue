<template lang="">
	<div>
		<div
			class="box w-16 h-16 bg-red-500 duration-1000"
			:class="{ 'ml-[80vw]': moveToRight }"
			v-if="showingBox"
		></div>
		<button class="border p-2 my-3" @click="moveToRight = false">left</button>

		<button class="border p-2 my-3 ml-3" @click="moveToRight = true">right</button>

		<button class="border p-2 my-3 ml-3" @click="showingBox = !showingBox">hide</button>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				moveToRight: false,
				showingBox: true,
			};
		},
	};
</script>
<style lang=""></style>
