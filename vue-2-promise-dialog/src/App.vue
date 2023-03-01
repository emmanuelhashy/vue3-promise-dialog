<template>
  <div id="app">
    <nested-dialog-view></nested-dialog-view>
    <dialogs-wrapper transition-name="fade"></dialogs-wrapper>
  </div>
</template>

<script>
import NestedDialogView from "./components/NestedDialogView.vue";
import { DialogsWrapper } from "vue-modal-dialogs";
export default {
  name: "App",
  components: {
    NestedDialogView,
    DialogsWrapper,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.33);
}

.dialog-content {
  margin: 0 20px;
  padding: 20px 30px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: #303133;
}

.message-box .dialog-content {
  min-width: 240px;
  text-align: center;
  font-size: 16px;
}
</style>
