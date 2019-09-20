<template>
	<div>
		<h2>{{ song.title}} <span class="artist">{{ song.artist }}</span></h2>
		<div>
			<button @click="$router.push('/')">Back</button>
			<button @click=pitch++>+</button>
			<button @click=pitch-->-</button>
		</div>
		<template v-for="(line, i) in song.lines">
			<pre v-if="line.type == 'lyric'" :key=i>{{ line.lyric }}</pre>
			<div v-else-if="line.type == 'tablature'" :key=i>
				<template v-for="(tab, j) in line.tabs">
					<tab :key=j :tab=tab :pitch=pitch></tab>
				</template>
			</div>
			<div v-else :key=i><br></div>
		</template>
	</div>
</template>

<script>
import Tab from './SongPage/Tab'

export default {
	name: 'song',
	components: { Tab },
	data() {
		return {
			song: {},
			pitch: 0
		}
	},
	mounted() {
		// Get song from `_id` route param
		this.$db.findOne({ '_id' : this.$route.params.song_id }, (err, doc) => {
			if (err) {
				console.error(err)
				return
			}
			this.song = doc
		})
	}
}
</script>