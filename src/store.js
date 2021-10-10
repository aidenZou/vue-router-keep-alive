import { reactive } from "vue";

const store = {
  debug: true,

  state: reactive({
    keepAliveList: [] //  ["Form"]
  }),

  add(component) {
    if (this.debug) {
      console.log("add", component);
    }

    if (!this.state.keepAliveList.includes(component)) {
      this.state.keepAliveList.push(component);
    }
  },

  remove() {
    if (this.debug) {
      console.log("remove");
    }

    this.state.keepAliveList = [];
  }
};

export default store;
