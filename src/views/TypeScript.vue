<template>
  <div class="home">
    <p>aaaa</p>
    <label for="title">책 이름 : </label>
    <input type="text" name="title" v-model="name" />
    <label for="price">가격 : </label>
    <input type="text" name="price" v-model="price" />

    <br />
    name : {{ name }} price : {{ price }} Title : {{ title }}

    <button @click="promisFunc(name, price, successFunc)">클릭</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  setup() {
    const book = useBook("감지영", 84, "NODE");
    const successFunc = (name: string, price: number) => {
      console.log(`이름 : ${name} , 가격 : ${price}`);
    };

    return { ...book, successFunc };
  },
});

// 타입정의
type BOOK_TITLE = "JS" | "JAVA" | "NODE";

// 인터페이스 정의
interface IBook {
  name: string;
  price: number;
  title: BOOK_TITLE;
}

const useBook = (name: string, price: number, title: BOOK_TITLE) => {
  const data = reactive<IBook>({
    name,
    price,
    title,
  });

  // 함수 파라미터로 재정의할수 있게 return값 넘기기
  function promisFunc(
    name: string,
    price: number,
    successFunc: (name: string, age: number) => void
  ) {
    setTimeout(() => {
      successFunc(name, price);
    }, 1000);
  }

  // typescript 오버로딩
  // 마지막 전 함수에서 오버로딩 파리미터  정의
  // 마지막 함수에서 처리
  function gerd(fn: string, age: number): void;
  function gerd(fn: string, age?: string): void;
  function gerd(fn: string, age: string, ssl: string): void;
  function gerd(fn: string, age?: number | string, ssl?: string): any {
    console.log(`${fn} : ${age}  ${ssl}`);
  }

  return { ...toRefs(data), promisFunc, gerd };
};
</script>

<style scoped></style>
