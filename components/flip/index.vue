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
		wrapperClass: String
	},
	mounted() {
		$('#flip-wrapper').turn(this.$props.options)
	},
};
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