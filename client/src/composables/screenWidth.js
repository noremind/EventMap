import { ref, onMounted, onUnmounted } from 'vue'

export function screenWidth() {
	const currentScreen = ref(0)

	function displayWindowSize() {
		let myWidth = window.innerWidth
		currentScreen.value = myWidth
	}

	onMounted(() => {
		window.addEventListener('resize', displayWindowSize)
		window.addEventListener('load', displayWindowSize)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', displayWindowSize)
		window.removeEventListener('load', displayWindowSize)
	})

	return { currentScreen }
}