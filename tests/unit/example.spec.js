import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  beforeEach(() => {
    window.matchMedia =
      window.matchMedia ||
      function() {
        return {
          matches: false,
          addListener: function() {},
          removeListener: function() {}
        };
      };
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
