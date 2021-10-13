<template>
  <div>vue2 구조</div>
  <div>
    데이터 바인딩
    <p>v-model</p>
    <label for="v-m">v-model 양방향 바인딩</label>
    <input type="text" name="v-m" v-model="model" /> <br />
    <span>바인딩 값 :</span>
    {{ model }}
    <br />
    <span>computed 읽기 값 : </span> {{ cAddModel }} <br />
    <button v-on:click="modelReset">초기화</button>
    <span>computed 읽고 쓰기값 : </span> {{ modelComputed }} <br />
    <button @click="InstanceProperties">인스턴스 속성 console 찍기</button>
    <button @click="InstanceMethods">인스턴스 메소드 console 찍기</button>

    <p>특별한 속성</p>
    <div class="boxWall">
      <!-- key -->
      <p :key="key">key : {{ key }} = VNode를 식별하기 위한 힌트로 사용</p>
      <!-- ref -->
      <p ref="refP">
        ref = 엘리먼트나 자식 컴포넌트에대한 참조를 등록할떄 사용
      </p>
      <!-- is -->
      <p>is = 동적 컴포넌트에 사용</p>
    </div>
  </div>

  <p>디렉티브 모음</p>
  <div class="dre-warp">
    <p>v-text</p>
    <p>v-html</p>
    <p>v-show</p>
    <p>v-if</p>
    <p>v-else-if</p>
    <p>v-else</p>
    <p>v-for</p>
    <p>v-on(HTML이벤트 접근) = @</p>
    <p>v-bind(HTML속성 접근) = :</p>
    <p>v-model</p>
    <p>v-slot = #</p>
    <p>v-pre</p>
    <p>v-once</p>
    <p>v-is</p>
  </div>

  <!-- tmpleate 데이터 바인딩 -->
</template>

<script>
export default {
  // #기타
  // name : "",
  // inheritAttrs : false,

  // #DOM 안쓸거같음
  // template : '',
  // render(){
  //   return
  // }

  // #Assets
  directives: {},
  components: {},

  // #컴포지션
  mixins: [],
  extends: {},
  provide() {
    return {};
  },
  inject: [],
  setup() {},

  // #데이터
  props: {},
  data() {
    return {
      model: "a",
      key: "keyValue",
    };
  },
  computed: {
    // 읽기만
    cAddModel() {
      return `${this.model}cadd`;
    },
    // 읽고 쓰기
    modelComputed: {
      get() {
        return this.model + "get";
      },
      set(v) {
        this.model = v;
      },
    },
  },
  methods: {
    modelReset() {
      this.modelComputed = "";
    },
    InstanceProperties() {
      // 인스턴스 속성
      console.log(this.$data); //data() 접근
      console.log(this.$props); // props() 접근
      console.log(this.$el); // 루트 DOM요소 접근
      //  현재 컴포넌스 인스턴스 인스턴스화,
      // 옵션에 사용자정의 속성을 포함하려할떄 유용
      console.log(this.$options);
      console.log(this.$parent); // 부모 인스턴스가 있을시 접근
      console.log(this.$root); // 현재 트리의 root인스턴스 부모가없으면 보인을 가르킴
      console.log(this.$slots); // 렌더 함수로 컴포넌트 작성할떄 유용
      // ref 속성으로 등록된 DOM 구성요소에 접근
      console.log(this.$refs);
      // props나 custom events로 인식되지 않는 부모 범위 속성 바인딩과 이벤트를 포함
      // props나 custom event가 없을때 모든 부모 범위 반인딩을 포함하며 내부 컴포넌트로 전달할수 있다.
      // 고차 컴포넌트(HOC) 를 작성할떄 유용
      console.log(this.$attrs);
    },
    InstanceMethods() {
      // watch랑 똑같음 라이프사이클에서 정의할떄 쓰는거같음
      // this.$watch();
      //
      // 부모 인스턴스에 인벤트 트리거 콜백 함수를 전달
      // this.$emit("eventCallTriger", { parms: "parms" });
      //
      // 컴포넌트 인스턴스를 강제로 리랜더링
      // this.$forceUpdate();
      //
      // DOM 업데이트 주기이후 실행될 콜백을 연기
      // this.$nextTick(() => {
      //   console.log("DOM 업데이트 주기이후 실행");
      // });
    },
  },
  watch: {
    model(value, oldValue) {
      console.log(`이전값 ${oldValue} 현재값 : ${value}`);
    },
  },

  // #라이프사이클
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  unmounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
};
</script>

<style lang="scss" scoped>
.dre-warp {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0px 20px;

  & p {
    border-bottom: 1px solid black;
  }
}
.boxWall {
  border: 1px solid black;
}
</style>
