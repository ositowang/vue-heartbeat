import { use, registerComponent } from "../utils";
import HeartBeat from "./HeartBeat.vue";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, HeartBeat);
  }
};

use(Plugin);

export default Plugin;
