import { defineStore } from 'pinia'
import { computed } from 'vue'
import { screenWidth } from '@/composables/screenWidth.js'

export const useScreenStore = defineStore('screen', () => {
	const { currentScreen } = screenWidth()
	const isLaptop = computed(() => {
		return currentScreen.value <= 1200 && currentScreen.value >= 769 ? true : false
	})

	const isTablet = computed(() => {
		return currentScreen.value <= 768 && currentScreen.value >= 420 ? true : false
	})

	const isMobile = computed(() => {
		return currentScreen.value <= 420 && currentScreen.value >= 200 ? true : false
	})


	return { isLaptop, isTablet, isMobile }
})
