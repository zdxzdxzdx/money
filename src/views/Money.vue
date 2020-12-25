<template>

    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <div class="notes">
            <FormItem filed-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"/>
        </div>
        <Tags :data-source="tags"/>
        {{count}}
        <button @click="$store.commit('increment',1)">点击</button>

    </Layout>

</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import Tags from '@/components/Money/Tags.vue';
    import {Component} from 'vue-property-decorator';

    import oldStore from '@/store/index2';
    import store from '@/store/index';
    import Button from '@/components/Button.vue';


    @Component({
        components: {Button, Tags, FormItem, Types, NumberPad},
        computed: {
            count() {
                //return store.state.count
                return this.$store.state.count;
            },
            recordList() {
                return oldStore.recordList;
            }
        }

    })
    export default class Money extends Vue {

        dataCount = store.state.count;

        store = oldStore;
        // add(){
        //   oldStore.addCount()
        // }
        tags = oldStore.tagList;

        // recordList: RecordItem[] = store.recordList;//recordList地址复制到recordList的地址

        record: RecordItem = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0
        };

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }

        onUpdateAmount(value: string) {
            this.record.amount = parseFloat(value);
        }

        saveRecord() {
            oldStore.createRecord(this.record);
        }

        // add(){
        //    // this.$store.commit('increment',1)
        //     store.commit('increment',1)
        // }


    }
</script>
<style lang="scss">

    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .notes {
        padding: 12px 0;
    }
</style>

<style lang="scss" scoped>

</style>