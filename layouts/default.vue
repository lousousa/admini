<template>
  <div :class="`${ $route.name }-page`">
    <Nuxt />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Muli');
* {
  font-family: 'Muli', sans-serif;
}
.login-page {
  @apply bg-blue-400;
}
</style>
