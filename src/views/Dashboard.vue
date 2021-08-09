<template>
  <div>
    Dashboard <br />
    <form @submit.prevent="onCreateDistributedCounter">
      <div class="counter">
        <input type="text" v-model="counterName" placeholder="Counter Name" />
      </div>
      <div class="subCounter">
        <input
          type="text"
          v-model="subCounterName"
          placeholder="Sub Counter Name (ie. global)"
        />
      </div>
      <button type="submit">Create Distributed Counter</button>
    </form>
    <br />
    <button @click="onIncrementDipCounter">IncrementDip</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import DistributedCounter from "../modules/FirestoreDistributedCounter";

export default {
  data() {
    return {
      counterName: "",
      subCounterName: "",
      db: null,
      numShards: 5,
    };
  },
  beforeMount() {
    this.db = firebase.firestore();
  },
  methods: {
    onCreateDistributedCounter() {
      console.log("onCreateDistributedCounter called");
      let ref = this.db
        .collection("--stats--")
        .doc("counters")
        .collection(this.counterName)
        .doc(this.subCounterName);
      DistributedCounter.createDistributedCounter(this.db, ref, this.numShards);
    },
    onIncrementDipCounter() {
      console.log("onIncrementDip called");
      let incrementValue = 1;
      DistributedCounter.incrementDistributedCounter(
        this.dipsRef,
        incrementValue,
        this.numShards
      );
    },
    onGetDipCounter() {},
  },
};
</script>

<style></style>
