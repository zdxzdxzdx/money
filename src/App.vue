<template>
    <div id="app">
        <router-view/>
    </div>

</template>
<script lang="ts">
    export default {
        name:"App"
    }

</script>
<style lang="scss">
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";

    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333333;
        line-height: 1.5;
        font-size: 16px;
        font-family: $font-hei;

    }


</style>



