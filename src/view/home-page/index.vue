<template>
    <div class="hello">
        <header class="header">
            <h1>{{ msg }}</h1>
        </header>
        <h5 class="text_c">vuex</h5>

        <div class="box">
            <Button type="primary" @click="reduceCont">-</Button>
            <p>{{ getCont}}</p>
            <Button type="primary" @click="addCont">+</Button>
        </div>

        <Icon type="ios-alarm-outline" />

        <div class="text_c">
            <p v-for="(item,index) in getList" :key="index">{{ item.a }}</p>
            <p>数量：{{ getListLength }}</p>
        </div>
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from "vuex";
    import imgLogo from "@/assets/img/logo.png";

    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        },
        computed: {
            getCont() {
                return this.$store.state.cont.cont;
            },
            ...mapGetters(["getList", "getListLength"])
        },
        methods: {
            ...mapActions(["addCont", "reduceCont"])
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header {
    text-align: center;
    padding: 20px 0;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: 120px;
        text-align: center;
    }
}

</style>
