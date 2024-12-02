<template>
  <div>
    <nav>
      <router-link to="/about">Home</router-link>
      <router-link to="/percentage-off">Percentage Off</router-link>
      <router-link to="/staggered">Staggered</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav a {
  margin-right: 10px;
}
</style>
