<template>
    <article class="message">
        <div class="message-header"
             :aria-expanded="open.toString()"
             role="menu"
             @click="toggle">
            <transition name="svg-icon-status" mode="out-in">
                <svg class="svg-icon minus-circle" v-if="open">
                    <use xlink:href="#svg-icon-minus-circle"></use>
                </svg>
                <svg class="svg-icon plus-circle" v-if="!open">
                    <use xlink:href="#svg-icon-plus-circle"></use>
                </svg>
            </transition>
            <slot name="header">Vad har hänt?</slot>
        </div>
        <transition
            @enter="enter"
            @leave="leave"
            @beforeEnter="beforeEnter"
            :css="false">
        <div class="message-body" :aria-hidden="(!open).toString()" v-if="open">
            <div class="message-content">
                <slot></slot>
            </div>
        </div>
        </transition>
    </article>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  name: "AccordionItem",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      // Forcefeeding values on first animation
      Velocity(
        el,
        {
          height: [
            function() {
              return el.scrollHeight;
            },
            0
          ],
          opacity: [1, 0],
          translateY: [0, -50]
        },
        {
          complete: done,
          duration: 250,
          easing: "easeIn"
        }
      );
    },
    leave(el, done) {
      // All props should be cached so forcefeeding isn't needed
      Velocity(
        el,
        {
          height: 0,
          opacity: 0,
          translateY: -50
        },
        {
          duration: 250,
          complete: done,
          easing: "easeOut"
        }
      );
    }
  }
};
</script>

<style lang="scss">
.message {
  &:not(:first-child) {
    border-top: 1px solid #d9d9d9;
  }
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  perspective: 30rem;
  text-align: left;

  &-header {
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    padding: 1rem 0;
    position: relative;
    transition: color 0.25s ease;
    z-index: 1;
    &[aria-expanded="true"] {
      border-bottom: 1px solid #d9d9d9;
    }
    &:hover {
      color: #990ae3;
      .svg-icon {
        fill: #990ae3;
      }
    }

    .svg-icon {
      fill: #652d86;
      flex-basis: 5.8rem;
      flex-shrink: 1;
      height: 2.4rem;
      transition: fill 0.25s ease;
      width: 2.4rem;
    }

    h3 {
      flex-grow: 1;
      font-size: 1.6rem;
      line-height: 1.125;
      margin: 0;
    }
  }
  &-body {
    transform-origin: top;
  }
  &-content {
    overflow: hidden;
    padding: 1.5rem 2rem 2rem 5.8rem;
  }
}
</style>
