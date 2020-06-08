const tagModel = {
  tags: JSON.parse(window.localStorage.getItem("tags") || "0") || [
    "1ww",
    "2ww",
    "3ww",
  ],

  fetchTags() {
    this.tags = JSON.parse(window.localStorage.getItem("tags") || "0") || [
      "1ww",
      "2ww",
      "3ww",
    ];
  },

  createTags(newTag: string) {
    this.tags.push(newTag);
    this.saveTags();
  },
  //TODO
  // deleteTags(){},
  // updateTags(){},
  saveTags() {
    window.localStorage.setItem("tags", JSON.stringify(this.tags));
  },
};
export default tagModel;
