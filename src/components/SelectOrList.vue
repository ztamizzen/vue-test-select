<template>
    <div class="vue-info__items" :class="{narrow: mobile}">
        <h3>{{ title }}</h3>
        <v-select v-if="!mobile" :options="list" />
        <ul v-if="mobile">
            <li v-for="(item, index) in list" :key="index">
                <a :href="item.value" target="_blank" rel="noopener">{{ item.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "SelectOrList",
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true
    },
    mobile: {
      type: Boolean,
      default: true,
      required: false
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
