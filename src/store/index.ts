import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tags: [] as tagType[],
    records: [] as recordType[],
    index: -1,
  },
  mutations: {
    fetchTags(state) {
      state.tags = JSON.parse(window.localStorage.getItem("tags") || "[]");
      if (state.tags.length === 0) {
        state.tags = [
          { id: 1, name: "衣" },
          { id: 2, name: "食" },
          { id: 3, name: "住" },
          { id: 4, name: "行" },
        ];
      }
    },

    createTags(state, newTag: tagType) {
      state.tags.push(newTag);
      store.commit("saveTags");
    },

    deleteTags(state, tagIndex: number) {
      state.tags.splice(tagIndex, 1);
      store.commit("saveTags");
    },

    
    updateTags(state,name: string) {
      console.log("up");
      state.tags[state.index].name = name;
      store.commit("saveTags");
    },

 
    findTagId(state, id: string) {
      state.index = state.tags.findIndex(
        (item: tagType) => item.id === parseInt(id)
      );
    },

    saveTags(state) {
      window.localStorage.setItem("tags", JSON.stringify(state.tags));
    },

    ///////////////////////////////////////////
    createRecords(state, newRecord){
      //判断
      state.records.push(newRecord);
      window.localStorage.setItem("record", JSON.stringify(state.records));
    },

    getRecords(state) {
      state.records = JSON.parse(window.localStorage.getItem("record") || "[]");
    },

    saveRecords(state) {
      window.localStorage.setItem("record", JSON.stringify(state.records));
    },
  },

  // actions: {}
  // modules: {
  // }
});

export default store;
