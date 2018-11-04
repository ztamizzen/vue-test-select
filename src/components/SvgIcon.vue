<template>
    <div v-once v-html="src" class="glyph-container"></div>
</template>

<script>
export default {
  name: "SvgIcon",
  props: ["src"]
};
</script>

<style scoped>
.glyph-container {
  height: 100%;
  width: 100%;
}
</style>
