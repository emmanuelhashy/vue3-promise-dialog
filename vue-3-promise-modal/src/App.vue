<template>
  <h2>Vue3 Promise modal example</h2>
  <p>
    When you open a modal, an async function is called and a promise is
    returned.
  </p>

  <p>When you close the modal, the promise resolves with a value.</p>

  <ButtonComponent
    @click="onTestConfirm"
    label="Confirm modal"
    class="m-3"
  ></ButtonComponent>
  <div class="console">
    <div class="console-item" v-for="(text, index) in items" :key="index">
      {{ text }}
    </div>
  </div>
  <DialogWrapper :transition-attrs="{ name: 'dialog' }" />
</template>

<script lang="js">

import {defineComponent, reactive} from "vue";
import  { confirm } from "./helpers/dialogs";
import { DialogWrapper } from "vue3-promise-dialog";

export default defineComponent({
  components: {DialogWrapper},
  props: {},
  setup() {
    const items = reactive([]);

    async function onTestConfirm() {
      if (await confirm('Do you really want to do this ?')) {
        items.push("Confirmed")
      } else {
        items.push("Not confirmed");
      }
    }

    return {
      onTestConfirm,
      items
    }
  }
})
</script>

<style scoped lang="scss">
.console {
  margin: 20px;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
</style>