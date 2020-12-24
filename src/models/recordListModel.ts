const localStorageKeyName = 'recordList';
const recordListModel = {
    //保存 data
    data: [] as RecordItem[],

    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    //读数据 写数据
    fetch() {
        //返回值
        this.data = JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];
        return this.data;

    },
    save() {
        window.localStorage.setItem('localStorageKeyName',
            JSON.stringify(this.data));
    }


};
export default recordListModel;
// export {model};