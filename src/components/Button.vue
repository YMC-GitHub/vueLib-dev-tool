<template>
	<div @click="handleClick" :class="wrapClass">
		button
	</div>
</template>
<script>
	function oneOf(value, validList) {
		for(var i = 0; i < validList.length; i++) {
			if(value === validList[i]) {
				return true;
			}
		}
		return false;
	}
	export default {
		name: 'v-button',
		props: {
			value: {
				type: [String, Number, Boolean],
				default: false
			},
			size: {
				validator: function(value) {
					return oneOf(value, ['sm', 'lg']);
				}
			},
			color: {
				validator: function(value) {
					return oneOf(value, ['primary', 'normal', 'warm', 'danger', 'disabled', 'gray']);
				}
			},
			shape: {
				validator: function(value) {
					return oneOf(value, ['radius']);
				}
			},
			name: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},

		methods: {
			handleClick(e) {
				this.$emit('click', e);
				console.log(`hey, man!`)
			}
		},
		computed: {
			wrapClass() {
				var prefix = 'smUI-3d-btn';
				return [
					`${prefix}`,
					`smUI__unselect`,
					{
						[`${prefix}__disabled`]: !!this.disabled,
						[`${prefix}__${this.color}`]: this.color,
						[`${prefix}__${this.size}`]: this.size,
						[`${prefix}__${this.shape}`]: this.shape,
					}
				];
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("button.less");
</style>