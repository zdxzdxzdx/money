const localStorageKayName = 'recordList';
const model = {

    clone(data: RecordItem[] | RecordItem){
      return  JSON.parse(JSON.stringify(data))
    },
    //读数据 写数据
    fetch() {
        //返回值
        return  JSON.parse(window.localStorage.getItem('localStorageKayName') || '[]') as RecordItem[];

       },
    save(data: RecordItem[]) {
        window.localStorage.setItem('localStorageKayName', JSON.stringify(data));
    }


};
export default model
// export {model};