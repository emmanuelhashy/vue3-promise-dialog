<template>
  <div class="message-box dialog-mask" @click="$close(false)">
    <div class="dialog-content">
      <header>{{ title }}</header>
      <div class="dialog-body">
        <p>{{ content }}</p>
      </div>
      <footer>
        <el-button type="text" size="mini" @click="$close(true)">Yes</el-button>
        <el-button type="text" size="mini" @click="$close(false)">No</el-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "NestedDialogComponent",
};
</script>