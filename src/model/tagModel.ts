const tagModel = {
  tags: [
    { id: 1, name: "1w衣" },
    { id: 2, name: "2w衣" },
    { id: 3, name: "3w衣" },
    { id: 4, name: "4w衣" },
  ],

  fetchTags() {
    this.tags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (this.tags === []) {
      this.tags = [
        { id: 1, name: "衣" },
        { id: 2, name: "食" },
        { id: 3, name: "住" },
        { id: 4, name: "行" },
      ];
    }
    return this.tags;
  },

  createTags(newTag: tagType) {
    this.tags.push(newTag);
    this.saveTags();
  },

  deleteTags(tagIndex: number) {
    this.tags.splice(tagIndex, 1);
    this.saveTags();
  },
  //TODO
  //updateTags(){},
  saveTags() {
    console.log(JSON.stringify(this.tags));
    window.localStorage.setItem("tags", JSON.stringify(this.tags));
  },

  //找到id对应tag的下标index
  findTagId(id: string) {
    //console.log(parseInt(id));
    //const eval: boolean = (item: tagType) => item.id === parseInt(id);
    // function eval(item){
    //   item.id === parseInt(id);
    // }
    const index = this.tags.findIndex(
      (item: tagType) => item.id === parseInt(id)
    );
    //console.log(index);
    return index;
  },
};
export default tagModel;
