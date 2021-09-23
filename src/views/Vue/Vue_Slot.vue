<template>
  <div id="had">
    <div>
      <header>
        <p>
          헤드 구역
        </p>
        <slot name="header"></slot>
      </header>
    </div>
    <p>Vue Slot 입니다</p>
    <div>
      <p>
        기본 구역
      </p>
      <slot></slot>
    </div>
    <div>
      <footer>
        <p>
          하단 구역
        </p>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>

  <!-- 사용방법 약어 v-slot = # -->
  <!-- v-slot:slot-name  -->
  <!-- #slot-name  -->

  <!-- 
  <vueSlot>
    <template v-slot:header>
      <p>header 구역 글쓰기</p>
    </template>
    <template #footer>
      <p>footer 구역 글쓰기</p>
    </template>
    <template #default>
      <p>기본 구역 글쓰기</p>
    </template>
  </vueSlot> 
-->

  <!-- <template>
    <div>
        <slot></slot>
    </div>
</template> -->

  <!-- slot이 하나있을시 -->
  <!-- 
     <vueSlot>기본구역 slot</vueSlot>
 -->
</template>

<style lang="scss" scoped>
#had {
  border: 1px black solid;
}
</style>
