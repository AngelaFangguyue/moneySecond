import { MessageBox } from "mint-ui";
import createid from "@/library/createid.ts";

function addTags() {
    console.log("新增");
    //console.log(MessageBox);
    MessageBox.prompt("请输入新增标签名").then(({ value, action }) => {
      if (value !== "" && action === "confirm") {
        const newTag = { id: createid(), name: value }; //要有一个createId的生成器
          //tagModel.createTags(newTag);
        this.$store.commit("createTags",newTag);
        this.$store.commit("fetchTags");//如果不加这一句，没有办法新增
      }
    });
  }

export default addTags;
