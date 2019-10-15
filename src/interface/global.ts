// 全局使用，在main.ts中引入
interface Window {
    GlobalData: {
        userType: number; // 角色设置，1，学生，2老师
        isAuthority: boolean; // 是否能够学生交互
        hasAuthority: (enabled: boolean) => void; // 开关学生交互
        handleStatus: number; // 展示状态 预览：1，编辑：2；
    };
}
/* tslint:disable */
declare namespace ClassrommMgr {
    function callbackInPageLoaded(a: boolean, b: boolean): void;
    function callbackInResLoaded(a: number): void;
}

declare function callbackInSendMsg(msg: string): void;
declare function callbackInSendInfo(msg: string): void;
declare function loadingBegin(): void;
declare function MsgCover(name: string): string;
declare function ShowLoadMsg(dom: any, msg: string): void;
declare function  GoProgress(current:number, total: number): void 


interface Vue {
    selectCoverageByEgret(id: number): void;
    listenMove(): void;
    removeMove(): void;
}

// 动作交互数据
interface Trigger {
    aimTagrget: { // 目标对象
        id: number;
    };
    animateName: string; // 目标对象的名称
    animateType: string; // 目标对象的类型
    originTarget: { // 源对象
        id: number;
    };
}

