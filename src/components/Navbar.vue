<template>
  <button @click="web3Connection.connect()">click me</button>
</template>

<script setup lang="ts">
import { web3Interface } from "@/web3";

const web3Connection =  new web3Interface();
</script>
