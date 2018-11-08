<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="vue-info">
      <select-or-list title="Installed CLI Plugins" :list="installedPlugins" :mobile="mobile" />
      <select-or-list title="Essential Links" :list="essential" :mobile="mobile" />
      <select-or-list title="Ecosystem" :list="ecosystem" :mobile="mobile" />
    </div>

    <accordion />

    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import SelectOrList from "@/components/SelectOrList";
import Accordion from "@/components/Accordion";

export default {
  name: "HelloWorld",
  props: ["msg"],
  components: {
    Accordion,
    SelectOrList
  },
  data() {
    return {
      mobile: true,
      installedPlugins: [
        {
          label: "babel",
          value:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        },
        {
          label: "typescript",
          value:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
        },
        {
          label: "pwa",
          value:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
        },
        {
          label: "unit-jest",
          value:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
        }
      ],
      essential: [
        {
          label: "Core Docs",
          value: "https://vuejs.org"
        },
        {
          label: "Forum",
          value: "https://forum.vuejs.org"
        },
        {
          label: "Community Chat",
          value: "https://chat.vuejs.org"
        },
        {
          label: "Twitter",
          value: "https://twitter.com/vuejs"
        },
        {
          label: "News",
          value: "https://news.vuejs.org"
        }
      ],
      ecosystem: [
        {
          label: "vue-router",
          value: "https://router.vuejs.org"
        },
        {
          label: "vuex",
          value: "https://vuex.vuejs.org"
        },
        {
          label: "vue-devtools",
          value: "https://github.com/vuejs/vue-devtools#vue-devtools"
        },
        {
          label: "vue-loader",
          value: "https://vue-loader.vuejs.org"
        },
        {
          label: "awesome-vue",
          value: "https://github.com/vuejs/awesome-vue"
        }
      ],
      maxWidth: "940px",
      maxWidthMediaQueryList: null
    };
  },
  methods: {
    widthChanged(mql) {
      this.mobile = mql.matches;
    },
    matchMedia() {
      this.maxWidthMediaQueryList = matchMedia(`(max-width: ${this.maxWidth})`);
      this.maxWidthMediaQueryList.addListener(this.widthChanged);
      this.widthChanged(this.maxWidthMediaQueryList);
    }
  },
  beforeDestroy() {
    this.maxWidthMediaQueryList.removeListener(this.widthChanged);
  },
  mounted() {
    this.$nextTick(() => {
      this.matchMedia();
    });
  },
  updated() {
    this.$nextTick(() => {
      if (!this.maxWidthMediaQueryList) {
        this.matchMedia();
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  margin: auto;
  max-width: 980px;
}
.vue-info {
  align-items: stretch;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  @media (max-width: 680px) {
    flex-direction: column;
  }

  &__items {
    background-color: #ffffffaa;
    border: 1px solid #00000055;
    flex-basis: 33%;
    flex-grow: 1;
    margin: 0 1rem;
    padding: 0 1rem 1rem;
    @media (max-width: 680px) {
      border: 0;
      border-bottom: 1px solid #00000055;
      margin-bottom: 1rem;
    }

    &.narrow {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          margin: 0.5rem 0.5rem;
        }
      }
    }
  }

  .v-select {
    background-color: azure;
  }
}
</style>
