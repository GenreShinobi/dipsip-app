<template>
  <header>
    <div class="header_container">
      <router-link class="site-logo" to="/" aria-label="Sip Dip Community Home">
        <img src="../assets/dipsip-logo.svg" />
      </router-link>
      <div class="flex items-center h-100 ml-auto">
        <router-link class="btn-link mr-2" to="/login">Log In</router-link>
        <router-link class="btn" to="/register">Create account</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "@/assets/css/constants.css";

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
  methods: {
    async signOut() {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          this.loggedIn = false;
          this.$router.replace({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.header_container {
  display: flex;
  max-width: var(--site-width);
  padding: 0 16px;
  background-color: white;
  box-shadow: 0 1px 1px var(--header-shadow);
  height: 56px;
}

.site-logo {
  max-width: 200px;
  font-size: var(--fs-xl);
  font-weight: var(--font-weight);
  display: inline-flex;
  flex-shrink: 0;
  align-self: stretch;
  align-items: center;
  text-decoration: none;
  vertical-align: center;
  color: var(--base);
  line-height: var(--lh-tight);
}

.site-logo img {
  max-width: var(--max-width, 125px);
  width: auto;
  height: calc(var(--header-height) - var(--su-2) * 2);
  display: inline-block;
}

.btn-link {
  display: block;
  white-space: nowrap;
  background: transparent;
  text-decoration: none;
  color: var(--accent-brand);
}

.btn-link:hover {
  background: rgba(0, 0, 0, 0.035);
}
</style>
