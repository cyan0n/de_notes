import NamedRegExp from 'named-regexp-groups'

const notes = ["DO", "REb", "RE", "MIb", "MI", "FA", "FA#", "SOL", "LAb", "LA", "SIb", "SI"]
const tones = ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"]

const lineRx = new RegExp(`^(\\s*(?:${tones.join('|')})[b\\#]?(?:aug|dim|m|7)?[\\/]?)+\\s*$`, 'g')
const tabRx = new NamedRegExp(`(?<padding>\\s*)(?<tone>${tones.join('|')})(?<semi>b|\\#)?(?<key>aug|dim|m|7)?(?<seperator>\\/)?`, 'g')

export default {
	parseTabs: line => {
		// Check if line is consist only of notes
		if (line.match(lineRx) != null) {
			let result = []

			// Cycle individual notes in line
			let match = tabRx.exec(line)
			while (match) {
				let tab = match.groups
				// Convert note to numeric value
				tab.value = notes.indexOf(tab.tone)
				if (tab.semi == '#') {
					tab.value++
				} else if (tab.semi == 'b') {
					tab.value--
				}
				
				result.push(tab)

				// Find next match
				match = tabRx.exec(line)
			}

			return result;
		}
		return false
	}
}