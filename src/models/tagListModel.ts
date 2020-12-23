const localStorageKayName = 'tagList';

type TagListModel = {

    data: string[]
    fetch: () =>  string[]
    create: (name: string) => 'success'| 'duplicated' // 联合类型 success表示成功 duplicated 表示 name 重复
    save: () => void

}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem('localStorageKayName') || '[]')
        return this.data;
    },
    create(name) {

        if (this.data.indexOf(name) >=0 ) {return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success'
    },
    save() {
        window.localStorage.setItem('localStorageKayName', JSON.stringify(this.data));
    }


};
export default tagListModel;
// export {model};