const recordName = "record";
const recordListsModel = {


  getRecords() {
    return ( JSON.parse(window.localStorage.getItem(recordName) || "[]"
    ));
  },

  saveRecords(records: recordType[]) {
    window.localStorage.setItem(recordName,JSON.stringify(records));
  }
   
  };
  export default recordListsModel;
  