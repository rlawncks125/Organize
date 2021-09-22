<template>
  <div>
    Vue3 Composition
  </div>
  <p>https://v3.ko.vuejs.org/api/built-in-components.html#keep-alive</p>
  <p>내장 컴포넌트부터 vue3에 하면될거같음</p>

  <div id="tel">텔레포트할 부모</div>

  <p>벽----------------------------------</p>

  <teleport to="#tel">
    <p>
      마래느스
    </p>
  </teleport>
  <teleport to="#tel">
    <p>
      asdsadawadaxx
    </p>
  </teleport>
  <emitChild @baby="emithandle" @pool="emithandle" />
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  reactive,
  readonly,
  ref,
  toRef,
  toRefs,
} from "vue";
import { providekey as key } from "../main";
import Vue_Child from "./Vue_Child.vue";

export default defineComponent({
  components: { emitChild: Vue_Child },
  // beforecreate , created => setup()
  setup() {
    // 라이프 사이클
    onBeforeMount(() => {}); //
    onMounted(() => {}); //
    onBeforeUpdate(() => {}); //
    onUpdated(() => {}); //
    onBeforeUnmount(() => {}); //
    onUnmounted(() => {}); //
    onErrorCaptured(() => {}); //
    onRenderTracked(() => {}); //
    onRenderTriggered(() => {}); //

    //
    provideInject();

    const emithandle = (emitValue: any) => {
      console.log(emitValue);
    };

    return { emithandle };
  },
});

// 반응성 API ( Reactive , Ref , Computed , Watch )
// Reactive / Ref Ts
const ReactiveTooRef = (props: any) => {
  // reactive 객체의 반응형 복사본을 반환
  const state = reactive({
    count: 0,
    choko: 0,
  });
  // 반응적이고 변경가능한 ref객체를 반환
  // .value 로 내부값 접근 가능
  const oneRef = ref("oneRef");

  // toRef
  // reactvie 객체의 속성을 가져와 ref로 만들수있음,
  // 소스 객체에 대해 reactive연결을 유지할수있음,
  // prop의 ref를 컴포지션 함수에 전달할떄 유용
  const chokoRef = toRef(state, "choko");
  const propsRef = toRef(props, "title");

  // toRefs
  // 리액티브 객체를 일반 객체로 반환하지만
  // 각 객체의 프로퍼티들이 ref로 reactive 객체 프로퍼티로 연결
  // temple에 각각 값사용하기위해 ...toRefs()로꺼내서 각변수로 사용가능
  const stateRefs = toRefs(state);
  return { ...toRefs(state) };

  // readonly
  // reactive 또는 ref를 읽기 전용 프록시로 반환
  const copyReadOnley = readonly(oneRef);

  // 검사
  // isProxy
  // isReactive
  // isReadonly
  // isRef
  // isRefs
  // unref : 상항함수 val = isRef(val) ? val.value : val

  // 기타
  // toRaw : reactvie 외 ref 프록시 원본 객체를 반환 !!!! 조심해서 써야함 !!!!
  // markRaw : 프록시가 변환돼지 않도록 , 객체 자체를 반환
  // shallowReactive : 반응변환을 수행하지않는 프록시 생성
  // shallowReadonly : 반응변환을 수행하지않는 프록시 생성
  // shallowRef : .value값 이 반응하지않는 프록시 생성
  // customRef
  // triggerRef
};

// provide / inject TS
const provideInject = () => {
  // const key: InjectionKey<string> = Symbol();

  // type이 string임으로 문자열이 아닌 값을 제공하면 오류가 발생합니다
  // provide(key, "foo");
  // 키(심볼)를 만들지 않고 string으로 provide할시
  // provide("stringFoo", "foo")

  const foo = inject(key); // foo의 타입: string | undefined
  // 키(심볼)을 사용지않은 provide에 접근할시
  const fooS = inject<string>("stringFoo"); // string | undefined
  console.log(foo, fooS);
};
</script>

<style scoped></style>
