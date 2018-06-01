<template>
	<div>
		<div class="btnpd05 blueviolet">
			<span @click="handleClick"><slot></slot></span>
			<div class="bd5fl">
				<div class="bd5fl01"></div>
			</div>
			<div class="bd5fr">
				<div class="bd5fr01"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'v-button',
		props: {
			id: {
				type: String,
				default: null
			},
			customClass: {
				type: String,
				default: null
			},
			name: {
				type: String,
				default: null
			},
			disabled: {
				type: Boolean,
				default: false
			},
			large: {
				type: Boolean,
				default: false
			},
			markup: {
				type: String,
				default: 'default'
			}
		},
		methods: {
			handleClick(e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style scoped>
	@import url("buttons.css");
</style>