<template>
  <div>
    트렌스 레이션 & 애니메이션
  </div>

  <!-- transtion 동작 하는 구성 -->
  <!-- 조건부 렌더링(사용) v-if -->
  <!-- 조건부 표시(사용) v-show -->
  <!-- 동적 컴포넌트 -->
  <!-- 컴포넌트 루트 노드 -->

  <!-- 전환 클래스 -->
  <!-- enter : 0 ~ 50% leave : 50% ~ 100% -->
  <div style="border : 1px solid black">
    <h2 style="border-bottom : 1px solid black">전환 클래스</h2>
    <p>
      v-enter-form :입력 시작 상태 ( 0% )
    </p>
    <p>
      v-enter-active :입력 활성화 상태 ( 0% ~ 50% )
    </p>
    <p>
      v-enter-to :입력 종료 상태 ( ~ 50% )
    </p>
    <p>
      v-leave-from :휴가 시작 ( 50% ~ )
    </p>
    <p>
      v-leave-active : 휴가 활성화 상태 ( 50% ~ 100% )
    </p>
    <p>
      v-leave-to : 휴가 종료 상태 ( 100% )
    </p>
  </div>
  <!-- 자바스크립트 HOOKS -->
  <div style="border : 1px solid black; margin-top:2rem">
    <h2 style="border-bottom : 1px solid black">자바 스크립트 HOOKS</h2>
    <p>@before-enter="beforeEnter"</p>
    <p>@enter="enter"</p>
    <p>@after-enter="afterEnter"</p>
    <p>@enter-cancelled="enterCancelled"</p>
    <p>@before-leave="beforeLeave"</p>
    <p>@leave="leave"</p>
    <p>@after-leave="afterLeave"</p>
    <p>@leave-cancelled="leaveCancelled"</p>
    <p>:css="false"</p>
  </div>

  <!-- 초기 렌더에도  전환 적용할시 appear 속성 -->
  <!-- <transition appear></transition> -->

  <!-- 요소 간 전환 -->
  <!-- 요소 간 전환시 모드 : in-out , out-in -->
  <div style="border : 1px solid black; margin-top:2rem; height:8rem">
    <h2 style="border-bottom : 1px solid black">요소 간 전환</h2>
    <div id="demo">
      <transition name="no-mode-fade" mode="out-in">
        <button v-if="on" key="on" @click="on = false">
          on
        </button>
        <button v-else key="off" @click="on = true">
          off
        </button>
      </transition>
    </div>
  </div>

  <!-- 구성 요소 간 전환 -->
  <div style="border : 1px solid black; margin-top:2rem">
    <h2 style="border-bottom : 1px solid black">구성 요소 간 전환</h2>
    <div id="demo" class="demo">
      <input v-model="view" type="radio" value="v-a" id="a" /><label for="a"
        >A</label
      >
      <input v-model="view" type="radio" value="v-b" id="b" /><label for="b"
        >B</label
      >
      <transition name="component-fade" mode="out-in">
        <component :is="view"></component>
      </transition>
    </div>
  </div>

  <h1>---------------- 전환 목록 구분선 -----------------------</h1>
  <!-- 전환 목록 -->
  <!-- v-for 사용하는 경우 transition-group 사용 -->
  <!-- 랜더링할 요소 tag를 선언 한다 , 전환 모드 사용 x -->
  <!-- 내부 요소들은 독립적인 key 를 가져야한다 -->
  <!-- Css 전환 클래스는 그룹/컨테이너 자체가 아닌 내부요소에 적용 -->

  <!-- 입력/해제 목록 전환-->
  <div style="border : 1px solid black; margin-top:2rem">
    <h2>전환 입력/해제 목록</h2>
    <div id="list-demo">
      <transition-group name="list" tag="p">
        <span v-for="item in listTransItems" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <button @click="listTransAdd">Add</button>
      <button @click="listTransRemove">Remove</button>
    </div>

    <!-- 이동 나열 전환-->
    <!-- name속성 을 사용하여 클래스를 수동으로 move-class 속성을 줌 -->
    <div style="border : 1px solid black; margin-top:2rem">
      <h2>이동 전환 나열</h2>
      <div id="flip-list-demo">
        <button @click="movingShuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
          <li v-for="item in movingitems" :key="item">
            {{ item }}
          </li>
        </transition-group>
      </div>
    </div>
  </div>

  <!-- 목록 전환  -->
  <div style="border : 1px solid black; margin-top:2rem">
    <h2>이동 전환 나열</h2>
    <div id="demo">
      <input v-model="query" />
      <transition-group
        name="staggered-fade"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li
          v-for="(item, index) in computedList"
          :key="item.msg"
          :data-index="index"
        >
          {{ item.msg }}
        </li>
      </transition-group>
    </div>
  </div>

  <!-- 동적 전환 -->
  <!-- 동적 전환의 가장 기본적인 예는 name 속성 에따라 동적 한다 -->
  <div style="border : 1px solid black; margin-top:2rem">
    <h2>동적 전환</h2>
    <div id="dynamic-fade-demo" class="demo">
      Fade In:
      <input
        type="range"
        v-model="dfadeInDuration"
        min="0"
        :max="dmaxFadeDuration"
      />
      Fade Out:
      <input
        type="range"
        v-model="dfadeOutDuration"
        min="0"
        :max="dmaxFadeDuration"
      />
      <transition
        :css="false"
        @before-enter="dbeforeEnter"
        @enter="denter"
        @leave="dleave"
      >
        <p v-if="dshow">hello</p>
      </transition>
      <button
        v-if="dstop"
        @click="
          dstop = false;
          dshow = false;
        "
      >
        Start animating
      </button>
      <button v-else @click="dstop = true">Stop it!</button>
    </div>
  </div>

  <h2>--------------------상태 전환 구분선 ----------------------------</h2>

  <!-- 상태전환 -->
  <!-- 숫자 와 계산 -->
  <!-- 진열된 색 -->
  <!-- SVG 노드의 우치 -->
  <!-- 원소의 크기 및 기타 특성 -->

  <div style="border : 1px solid black; margin-top:2rem">
    <h2>숫자 애니메이션</h2>
    <div id="animated-number-demo">
      <input v-model.number="ani_number" type="number" step="20" />
      <p>{{ ani_animatedNumber }}</p>
    </div>

    <h2>동적 상태 전환 패스 : 이유 = svg 다각형 더러울거같음</h2>
  </div>

  <!--  -->
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";

const ComponentA = { template: `<div>Component A</div>` };
const ComponentB = { template: `<div>Component B</div>` };
export default defineComponent({
  components: {
    "v-a": ComponentA,
    "v-b": ComponentB,
  },
  setup() {
    const on = ref(true);
    const view = ref("va");
    const {
      items: listTransItems,
      add: listTransAdd,
      remove: listTransRemove,
    } = 입력_해제_전환();
    const {
      items: movingitems,
      shuffleValue: movingShuffle,
    } = 이동_나열_전환();
    const 목록 = 목록_전환();
    const {
      beforeEnter: dbeforeEnter,
      enter: denter,
      leave: dleave,
      show: dshow,
      fadeInDuration: dfadeInDuration,
      fadeOutDuration: dfadeOutDuration,
      maxFadeDuration: dmaxFadeDuration,
      stop: dstop,
    } = 동적_전환();

    const {
      number: ani_number,
      animatedNumber: ani_animatedNumber,
    } = 숫자_애니메이션();

    return {
      on,
      view,
      listTransItems,
      listTransAdd,
      listTransRemove,
      movingitems,
      movingShuffle,
      ...toRefs(목록),
      dbeforeEnter,
      denter,
      dleave,
      dshow,
      dfadeInDuration,
      dfadeOutDuration,
      dmaxFadeDuration,
      dstop,
      ani_number,
      ani_animatedNumber,
    };
  },
});

// 전환 목록
const 입력_해제_전환 = () => {
  const state = reactive({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10,
  });

  const randomIndex = () => {
    return Math.floor(Math.random() * state.items.length);
  };
  const add = () => {
    state.items.splice(randomIndex(), 0, state.nextNum++);
  };
  const remove = () => {
    state.items.splice(randomIndex(), 1);
  };
  return { ...toRefs(state), randomIndex, add, remove };
};

const 이동_나열_전환 = () => {
  const items = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const shuffleValue = () => {
    items.value = shuffle(items.value);
  };

  return { items, shuffleValue };

  function shuffle(getArray: Array<number>): Array<number> {
    const array = getArray;
    for (let index = array.length - 1; index > 0; index--) {
      // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
      const randomPosition = Math.floor(Math.random() * (index + 1));
      // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
    return array;
  }
};

const 목록_전환 = () => {
  const state = reactive({
    query: "",
    list: [
      { msg: "Bruce Lee" },
      { msg: "Jackie Chan" },
      { msg: "Chuck Norris" },
      { msg: "Jet Li" },
      { msg: "Kung Fury" },
    ],
  });
  const computedList = computed(() => {
    return state.list.filter((item) => {
      return item.msg.toLowerCase().indexOf(state.query.toLowerCase()) !== -1;
    });
  });

  const beforeEnter = (el: any) => {
    el.style.opacity = 0;
    el.style.height = 0;
  };
  const enter = (el: any, done: any) => {
    //@ts-ignore
    gsap.to(el, {
      opacity: 1,
      height: "1.6em",
      delay: el.dataset.index * 0.15,
      onComplete: done,
    });
  };
  const leave = (el: any, done: any) => {
    //@ts-ignore
    gsap.to(el, {
      opacity: 0,
      height: 0,
      delay: el.dataset.index * 0.15,
      onComplete: done,
    });
  };

  return { ...toRefs(state), computedList, beforeEnter, enter, leave };
};

const 동적_전환 = () => {
  const state = reactive({
    show: true,
    fadeInDuration: 1000,
    fadeOutDuration: 1000,
    maxFadeDuration: 1500,
    stop: true,
  });

  const beforeEnter = (el: any) => {
    el.style.opacity = 0;
  };

  const enter = (el: any, done: any) => {
    //@ts-ignore
    Velocity(
      el,
      { opacity: 1 },
      {
        duration: state.fadeInDuration,
        complete: function() {
          done();
          if (!state.stop) state.show = false;
        },
      }
    );
  };
  const leave = (el: any, done: any) => {
    //@ts-ignore
    Velocity(
      el,
      { opacity: 0 },
      {
        duration: state.fadeOutDuration,
        complete: function() {
          done();
          state.show = true;
        },
      }
    );
  };

  onMounted(() => {
    state.show = false;
  });
  return { ...toRefs(state), beforeEnter, enter, leave };
};

// 상태 전환
const 숫자_애니메이션 = () => {
  const state = reactive({
    number: 0,
    tweenedNumber: 0,
  });
  const animatedNumber = computed(() => {
    return state.tweenedNumber.toFixed(0);
  });
  watch(
    () => state.number,
    (newValue) => {
      //@ts-ignore
      gsap.to(state, { duration: 0.5, tweenedNumber: newValue });
    }
  );
  return { ...toRefs(state), animatedNumber };
};
</script>

<style lang="scss" scoped>
body {
  margin: 30px;
}

#demo {
  position: relative;
}

.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 0.5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}

button {
  background: #05ae7f;
  border-radius: 4px;
  display: inline-block;
  border: none;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}

/* 전환 목록 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: transform 0.8s ease;
}
</style>
