<template>
  <div v-if="dipCount != null">{{ dipCount }} / {{ sipCount }}</div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

export default {
  name: "DipCounter",
  data() {
    return {
      dipRef: null,
      dipCount: null,
      sipRef: null,
      sipCount: null,
    };
  },
  beforeMount() {
    this.dipRef = firebase.database().ref("dipCounter/global");
    this.dipRef.on("value", (snapshot) => {
      const data = snapshot.val();
      this.dipCount = data;
    });
    this.sipRef = firebase.database().ref("sipCounter/global");
    this.sipRef.on("value", (snapshot) => {
      const data = snapshot.val();
      this.sipCount = data;
    });
  },
};
</script>

<style></style>
