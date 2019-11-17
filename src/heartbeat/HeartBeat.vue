<template>
  <div :style="cssVariables" class="pulse-wrapper">
    <div
      class="pulse"
      :class="[{'danger':state==='Danger','off': state==='Off'}]"
      :style="{fontSize:fontSize,lineHeight:fontSize}"
    >
      <slot />
      <div v-if="state==='Danger'">
        <slot name="danger">{{dangerText}}</slot>
      </div>
      <div v-else-if="state==='Normal'">
        <slot name="normal">{{normalText}}</slot>
      </div>
      <div v-else>
        <slot name="off">&#x2716;</slot>
      </div>
      <slot />
    </div>
    <div class="pulse-2" :class="[{off:state==='Off'}]"></div>
  </div>
</template>

<script>
import { convertToUnit } from "../utils";
export default {
  name: "HeartBeat",
  props: {
    width: {
      type: [String, Number],
      default: "20px"
    },
    dangerText: {
      type: [String, Number]
    },
    normalText: {
      type: [String, Number]
    },
    state: {
      type: String,
      default: "Off"
    },
    textSize: {
      type: String,
      default: "10px"
    }
  },
  computed: {
    cssVariables: function() {
      const width =
        typeof this.width === "string" ? parseInt(this.width) : this.width;
      const animationInner = Math.round(width / 2.2);
      const animationOuter = Math.round(width / 1.3);
      let variables = {
        "--heartbeat-width": convertToUnit(this.width),
        "--heartbeat-color": "27, 201, 142",
        "--heartbeat-inner": convertToUnit(animationInner),
        "--heartbeat-outer": convertToUnit(animationOuter)
      };

      if (this.state === "Off") {
        variables["--heartbeat-color"] = "112,120,133";
      } else if (this.state === "Danger") {
        variables["--heartbeat-color"] = "230,71,89";
      }
      return variables;
    },
    fontSize: function() {
      return convertToUnit(this.textSize);
    }
  }
};
</script>

<style lang="scss" scoped>
.pulse-wrapper {
  position: relative;
  width: var(--heartbeat-width);
  height: var(--heartbeat-width);
}
.pulse {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--heartbeat-width);
  height: var(--heartbeat-width);
  border-radius: 50%;
  background-color: #1bc98e;
  color: #252830;
  animation-name: pulse-1;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.57, 0.14, 0.51, 0.92);
  z-index: 2;
  &.danger {
    background-color: #e64759;
    color: #ffffff;
  }
  &.off {
    background-color: #85898c;
    color: #ffffff;
    animation: none;
  }
}

.pulse-2 {
  position: absolute;
  width: var(--heartbeat-width);
  height: var(--heartbeat-width);
  border-radius: 50%;
  background-color: #1bc98e;
  box-shadow: 0 0 0 rgba(var(--heartbeat-color), 0.25);
  animation-name: pulse-2;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.57, 0.14, 0.51, 0.92);
  z-index: 1;
  &.off {
    animation: none;
  }
}

@keyframes pulse-1 {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0.25);
    box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0.25);
  }
  70% {
    -moz-box-shadow: 0 0 0 var(--heartbeat-outer)
      rgba(var(--heartbeat-color), 0);
    box-shadow: 0 0 0 var(--heartbeat-outer) rgba(var(--heartbeat-color), 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0);
    box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0);
  }
}

@keyframes pulse-2 {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0.25);
    box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0.25);
  }
  70% {
    -moz-box-shadow: 0 0 0 var(--heartbeat-inner)
      rgba(var(--heartbeat-color), 0);
    box-shadow: 0 0 0 var(--heartbeat-inner) rgba(var(--heartbeat-color), 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0);
    box-shadow: 0 0 0 0 rgba(var(--heartbeat-color), 0);
  }
}
</style>