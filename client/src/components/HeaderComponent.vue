<template>
  <header class="header">
    <Transition name="mobile-aside">
      <Aside v-if="closeWhereLaptop()" @toggle-mobile-window="toggleMobileWindow"></Aside>
    </Transition>

    <div class="container">
      <div class="header__wrapper">
        <a href="#"><img src="" alt="EventMap Logo" /></a>

        <nav v-if="!screenStore.isTablet && !screenStore.isMobile" class="nav">
          <ul class="nav__list">
            <li class="nav__list-item"><a href="#" class="nav__link">Карта</a></li>
            <li class="nav__list-item"><a href="#" class="nav__link">Контакты</a></li>
            <li class="nav__list-item"><a href="#" class="nav__link">Избранные</a></li>
            <li class="nav__list-item"><a href="#" class="nav__link">Мой записи</a></li>
          </ul>
        </nav>

        <div v-if="screenStore.isTablet || screenStore.isMobile" class="mobile-burger">
          <input class="visualize-hidden" id="toggle" type="checkbox" />

          <label
            @click="toggleMobileWindow()"
            :class="isOpen ? 'hamburger--hidden' : ' '"
            for="toggle"
            class="hamburger"
          >
            <div class="top-bun"></div>
            <div class="meat"></div>
            <div class="bottom-bun"></div>
          </label>
        </div>

        <div v-if="!screenStore.isTablet && !screenStore.isMobile" class="header__user">
          <img class="header__user-img" src="" alt="User phone" />
          <p class="header__user-name">Issa Norem</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useScreenStore } from '@/stores/defineScreenStore.js'
import Aside from '@/components/MobileAside.vue'

const screenStore = useScreenStore()
const isOpen = ref(false)

function toggleMobileWindow() {
  isOpen.value = !isOpen.value
}

function closeWhereLaptop() {
  if (isOpen.value && !screenStore.isLaptop) {
    return true
  } else {
    return false
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;
.header {
  &__wrapper {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    margin: auto 0;

    @include abs.breakpoints('laptop') {
    }
  }

  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}

.mobile-aside-enter-active,
.mobile-aside-leave-active {
  background-color: rgba(197, 196, 196, 0.5);
  transition: all 0.3s linear;
  opacity: 1;
}

.mobile-aside-enter-from,
.mobile-aside-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.nav {
  &__list {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    &-item {
      display: block;
    }
  }
}

.mobile-burger {
  position: relative;
}

.hamburger {
  position: absolute;
  right: 15px;
  width: 2em;
  height: 45px;
  z-index: 1;

  &--hidden {
    opacity: 0;
  }
}

.hamburger div {
  position: relative;
  width: 3em;
  height: 5px;
  border-radius: 3px;
  background-color: #f8982b;
  margin-top: 5px;
  // transition: all 0.3s ease-in-out;
}
</style>
