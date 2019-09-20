<template>
	<pre>{{ tab.padding }}{{ note }}{{ tab.key }}{{ tab.seperator }}</pre>
</template>

<script>
import notes from '../../modules/notes'

export default {
    props: {
        tab: {
            required: true,
            type: Object
        },
        pitch: {
            type: Number,
            default: 0
        }
    },
    computed: {
        note() {
            return notes.transpose(this.tab.value, this.pitch)
        }
    }
}
</script>

<style lang="scss" scoped>
pre {
	display: inline;
}
</style>
