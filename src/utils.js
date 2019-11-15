export const convertToUnit = (str, unit = "px") => {
  if (str == null || str === "") {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
};

export const use = plugin => {
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(plugin);
  }
};

export const registerComponent = (Vue, component) => {
  Vue.component(component.name, component);
};
