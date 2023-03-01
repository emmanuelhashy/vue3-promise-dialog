<template>
  <OkCancelBox :value="true" ok-label="YES" cancel-label="NO">
    <template #header>Confirm</template>
    <template #body>
      <div style="padding: 20px">
        {{ text }}
      </div>
    </template>
  </OkCancelBox>
</template>
  
  <script lang="js">
  import {defineComponent} from "vue";
  import OkCancelBox from "./OkCancelButton.vue";
  
  export default defineComponent({
    components: {OkCancelBox},
    props: {
      text: String
    },
    methods: {
      returnValue() {
        return true;
      }
    }
  })
  </script>
  
  <style scoped>
</style>