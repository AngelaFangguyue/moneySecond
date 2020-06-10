let tagId = parseInt(window.localStorage.getItem("tagId") || "0");
function createdId() {
  tagId += 1;
  window.localStorage.setItem("tagId", tagId.toString());
  return tagId;
}
export default createdId;

////使用类的方式
// let tagId1 = parseInt(window.localStorage.getItem('tagId')||'0');
// class CreateId1 {
//   constructor(la) {
//     this.value = la + 1;
//    // return this.value;
//   }
// }
// console.log((new CreateId1(tagId1)).value);
////使用类的方式
