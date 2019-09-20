<template>
    <div>
		<!-- Search -->
		<!-- Songlist Select -->
		<ul id="song-select">
			<li v-for="(song, i) in song_list" :key="i" class="song-option">
				<span class="title">{{ song.title }}</span> <span class="artist">{{ song.artist }}</span>
			</li>
		</ul>
		<button @click="$router.push('migration')">Migration</button>
	</div>
</template>

<script>
export default {
	name: 'song-list',
	data() {
		return {
			song_list: []
		}
	},
	mounted() {
		this.$db.find({}, (err, docs) => {
			if (err) {
				console.error(err)
				return
			}
			this.song_list = docs
		})
	}
}
</script>

<style lang="scss">
#song-select {
	display: flex;
	flex-direction: column;
	list-style: none;
	.song-option {
		padding: 5px 10px;
		cursor: pointer;
		user-select: none;
		transition: 0.2s;
		&:hover {
			background-color: lightblue;
		}
		.title {
			font-weight: bold;
		}
		.artist {
			color: gray;
			margin-left: 5px;
			font-size: .75em
		}
	}
}
</style>