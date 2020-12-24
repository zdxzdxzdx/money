import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
    //保存 data
    data: [] as RecordItem[],

    create(record: RecordItem){
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.data.push(record2);
        this.save()
    },
    //读数据 写数据
    fetch() {
        //返回值
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;

    },
    save() {
        window.localStorage.setItem(localStorageKeyName,
            JSON.stringify(this.data));
    }


};
export default recordListModel;
// export {model};