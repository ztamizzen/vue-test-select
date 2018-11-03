<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-select />
  </div>
</template>

<script>
import MySelect from '@/components/my-select.vue';

export default {
  name: 'About',
  components: {
    MySelect
  }
}
</script>
