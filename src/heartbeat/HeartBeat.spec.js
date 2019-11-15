import { shallowMount } from "@vue/test-utils";
import HeartBeat from "./HeartBeat.vue";

let wrapper;

describe("HeartBeat", () => {
  beforeEach(() => {
    wrapper = shallowMount(HeartBeat);
  });

  it("is called", () => {
    expect(wrapper.name()).toBe("HeartBeat");
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("matches snapshots", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("correctly renders props", () => {
    const text = "Danger";
    wrapper = shallowMount(HeartBeat, {
      propsData: {
        dangerText: text,
        state: "Danger"
      }
    });

    expect(wrapper.text()).toBe(text);
  });

  it("correctly renders state", () => {
    const danger = "Danger";
    wrapper = shallowMount(HeartBeat, {
      propsData: {
        state: danger
      }
    });

    expect(wrapper.findAll(".danger").length).toBe(1);
  });

  it("correctly renders state", () => {
    const off = "Off";
    wrapper = shallowMount(HeartBeat, {
      propsData: {
        state: off
      }
    });

    expect(wrapper.findAll(".off").length).toBe(2);
  });

  it("correctly renders the default slot", () => {
    wrapper = shallowMount(HeartBeat, {
      slots: {
        default: '<div class="default"></div>'
      }
    });

    expect(wrapper.find(".default").html()).toBe('<div class="default"></div>');
  });
});
