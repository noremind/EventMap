<template>
  <div class="mobile-aside" @click.self="$emit('toggleMobileWindow')">
    <div class="mobile-aside__wrapper">
      <div class="mobile-aside__box">
        <h1>Side mobile</h1>
        <img @click.once="$emit('toggleMobileWindow')" src="" alt="Close button" />
      </div>

      <nav class="mobile-nav">
        <ul class="mobile-nav__list">
          <li class="mobile-nav__list-item"><a href="#" class="mobile-nav__link">Карта</a></li>
          <li class="mobile-nav__list-item"><a href="#" class="mobile-nav__link">Контакты</a></li>
          <li class="mobile-nav__list-item">
            <a href="#" class="mobile-nav__link">Избранные</a>
          </li>
          <li class="mobile-nav__list-item">
            <a href="#" class="mobile-nav__link">Мой записи</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.mobile-aside {
  position: absolute;
  width: 100%;
  height: 100%;
  // transition: all 0.4s ease;
  background-color: rgba(197, 196, 196, 0.5);
  &__wrapper {
    position: absolute;
    z-index: 3;
    max-width: 350px;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 25px;
  }

  &__box {
    display: flex;
    justify-content: space-between;
  }
}

.mobile-nav {
  &__link {
    color: abs.$accent-color;
  }
}
</style>
