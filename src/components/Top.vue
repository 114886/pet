<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: sticky;
  top: -1px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  text-align: center;
  align-items: center;
  background-color: white;
}
</style>