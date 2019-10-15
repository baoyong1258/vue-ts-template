<template>
    <div class="template">
        <p>{{ modeImgSrc }}</p>
        <p>store: {{ state1 }}</p>
        <div class="template__btnBox">
            <button class="btnBox__button">Primary button</button> 
            <button class="btnBox__button--secondary">Secondary button</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { getCoursewareById } from '@/api';
// Register the router hooks with their names
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate', // for vue-router 2.2+
]);
@Component({
    components: {  },
})
export default class Template extends Vue {
    public $refs: {
        ConfigPanel: any;
    };

    @State('state1') public state1: string;
    @Mutation('CHANGE_STATE1') public CHANGE_STATE1: any;

    @Prop(String) private readonly content1: string;
    @Prop({ default: '' }) private readonly content2: string;

    private data1: string = 'data1';

    // 等价于computed
    get modeImgSrc() {
        return `resource/template/CardAlert/type1/CardAlert_type1_bg${this.data1}.png`;
    }

    public created() {

    }

    public mounted() {

    }

    public activated() {
     
    }

    public deactivated() {

    }

    // public beforeRouteLeave (to: any, from: any, next: any) {

    // }

    @Watch('child')
    onChildChanged(val: string, oldVal: string) {}

    @Emit('cancel')
    cancel() {}

    play() {}

    stop() {}

    api() {
        getCoursewareById('111')
            .then(res => {

            })
    }
}
</script>
<style lang="scss" scoped>
.template {

}
.template__btnBox {
    
}
.btnBox__button {
    width: 200px;
    height: 100px;
    // assets/styles中的variables.scss、mixin.scss已经通过webpack可以在任一vue文件中使用
    background-color: $pink; 
}
.btnBox__button--secondary {
    @extend .btnBox__button;
    @include position-absolute(0px, 0px);
    background-color: green;
}
</style>

