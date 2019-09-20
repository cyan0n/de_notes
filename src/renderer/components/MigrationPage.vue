<template>
	<div>
		<button @click="migrate">Migrate</button>
	</div>
</template>

<script>
import fs from 'fs'
import path from 'path'
import readline from 'readline'

export default {
	name: 'migration',
	methods: {
		migrate() {
			// Migration directory
			const dir = path.join(__static, 'migrate')

			// Read all files in `dir`
			fs.readdir(dir, (err, files) => {
				if (err) {
					console.error('Error whilst reading migration files')
					return false
				}

				// Cycle migration files
				files.forEach(file => {
					// Initialize line reader
					const rl = readline.createInterface({
						input: fs.createReadStream(path.join(dir, file))
					})

					// Initialize document for DB
					const titleArist = path.basename(file, '.txt').split(' - ')
					let document = {
						title: titleArist[0],
						artist: titleArist[1],
						lines: []
					}

					// Read file lines
					rl.on('line', line => {
						// Parse line as tablature/lyric/empty
					})

					// End of file
					rl.on('close', line => {
						// Save to DB
					})
				})
			})
		}
	}
}
</script>