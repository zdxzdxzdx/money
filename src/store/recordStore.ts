import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
let data: RecordItem[] | undefined = undefined;


const recordStore = {

    recordList: [] as RecordItem[],
    fetchRecords() {
        data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList;
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    },


    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.recordList && this.recordList.push(record2);
        // this.recordList?.push(record2)
        recordStore.saveRecords();

    }

};
recordStore.fetchRecords();
export default recordStore;