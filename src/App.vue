<template>
  <div id="app">
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'getIsAuth'
    ])
  },
  mounted() {
    if (localStorage.getItem('leadhit-site-id')) {
      this.$store.commit('setIsAuth', true)
      this.$router.push('/analytics')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3 {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.action-button {
  background: #46966a;
  height: 42px;
  width: 100px;
  border: none;
  border-radius: 8px;
  color: #fff;
  transition: all .3s ease-in-out;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #46966a;
    border: 1px solid #46966a;
  }

  &:focus {
    outline: 1px solid #e3e3e3;
    box-shadow: 5px 3px 2px 0px #e3e3e3;
  }


}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  nav {
    display: flex;
    gap: 16px;
    margin-top: 16px;
  }
}
</style>
