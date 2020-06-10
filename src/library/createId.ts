let id = parseInt(window.localStorage.getItem("tagId")||'0')||0;
//let id = 0;
function createdId(){
     id += 1;
     window.localStorage.setItem("tagId",id.toString());
    return id;
}
export default createdId;

////使用类的方式去生成id
//class createdId2{

//}