<template>
	<div id="flip-wrapper" :class="wrapperClass">
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
		config: {
			type: Object,
			required: false,
			default: () => ({}),
			props: {
				width: Number,
				height: Number,
				resize: Function
			}
		},
		nextPage: Function,
		prePage: Function,
		// 参数为页码
		gotoPage: Function,
	},
	mounted() {
		const props = this.$props
		$('#flip-wrapper').turn(props.options)
		$('#flip-wrapper').turn('disable', props.disable)
	},
};
export const nextPage = () => $('#flip-wrapper').turn('next')
export const previousPage = () => $('#flip-wrapper').turn('previous')
export const toPage = (index) => $('#flip-wrapper').turn('page', index)
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