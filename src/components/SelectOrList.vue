<template>
    <div class="vue-info__items" :class="{narrow: mobile}">
        <h3>{{ title }}</h3>
        <v-select v-if="!mobile" :options="list" @input="picked" />
        <ul v-if="mobile">
            <li v-for="(item, index) in list" :key="index">
                <a :href="item.value" target="_blank" rel="noopener">{{ item.label }}</a>
            </li>
        </ul>
        <a :href="pickedLink.value" v-if="pickedLink" target="_blank" rel="noopener">{{ pickedLink.label }}</a>
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
  },
  data() {
    return {
      pickedLink: null
    };
  },
  methods: {
    picked(value) {
      this.pickedLink = value;
    }
  }
};
</script>

<style module>
.vue-info__items {
  outline: 1px solid limegreen;
}
</style>
