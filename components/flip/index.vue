<template>
	<div id="flip-wrapper" :class="wrapperClass" ref="ref">
		<slot></slot>
	</div>
</template>

<script>
import * as jquery from "jquery"
import turn from "./turn";
const $ = turn(jquery)
export default {
	name: "flip",
	props: {
		options: {
			type: Object,
			required: false,
			default: () => ({})
		},
		// 是否禁止滑动翻页
		disable: Boolean,
		wrapperClass: String,
		ref: Object,
	},
	mounted() {
		const props = this.$props
		$('#flip-wrapper').turn(props.options)
		$('#flip-wrapper').turn('disable', props.disable)
	},
};
// 无法翻页返回 false
export const nextPage = () => {
	const res = $('#flip-wrapper').turn('next')
	return typeof res !== 'number'
}
// 无法翻页返回 false
export const previousPage = () => {
	const res = $('#flip-wrapper').turn('previous')
	return typeof res !== 'number'
}
// 超出页面范围返回 false
export const toPage = (index) => {
	const res = $('#flip-wrapper').turn('page', index)
	return typeof res !== 'number'
}
</script>

<style scoped>
#flip-wrapper {
	width: 100%;
	height: 100%;
}

#flip-wrapper .turn-page {
	background-color: white;
	width: 100%;
	height: 100%;
}
</style>