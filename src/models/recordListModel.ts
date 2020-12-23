const localStorageKeyName = 'recordList';
const recordListModel = {

    clone(data: RecordItem[] | RecordItem){
      return  JSON.parse(JSON.stringify(data))
    },
    //读数据 写数据
    fetch() {
        //返回值
        return  JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];

       },
    save(data: RecordItem[]) {
        window.localStorage.setItem('localStorageKeyName', JSON.stringify(data));
    }


};
export default recordListModel
// export {model};