import { ref, onMounted, onUnmounted } from "vue";

interface IOptions {
  timing?: number;
  deleteSpeed?: number;
  stopTiming?: number;
  startTimeing?: number;
}

export const countString = (data: Array<string>, options: IOptions) => {
  // 더미 데이터 환경
  let dataNumber = 0;
  let copyData = "";
  let lastString = false;
  let intervalIndex: number;

  // 옵션환경
  const deleteSpeed = options.deleteSpeed || 1;
  const timing = (options.timing || 1) * 10;
  const stopTiming = (options.stopTiming || 1) * 500;
  const startTiming = (options.startTimeing || 1) * 50;
  // 결과값
  let resultData = ref<string>("");

  const reFunc = () => {
    // 문자 늘어날떄
    if (!lastString) {
      copyData = data[dataNumber].slice(0, copyData.length + 1);

      // 출력
      resultData.value = copyData;

      // 마지막 글자인지 체크
      if (copyData.length === data[dataNumber].length) {
        lastString = true;

        // 문자열이 다 출력 됐을 때 잠깐 멈춤
        clearInterval(intervalIndex);
        setTimeout(() => {
          intervalIndex = setInterval(reFunc, timing);
        }, stopTiming);
      }
    }

    // 문자 줄어들떄
    else if (lastString === true) {
      copyData = copyData.slice(0, copyData.length - deleteSpeed);

      // 문자열 검사
      // 문자 길이가 0이 될시 다음 배열로 넘기기
      if (copyData.length === 0) {
        if (dataNumber >= data.length - 1) dataNumber = 0;
        else dataNumber++;

        lastString = false;
        copyData = data[dataNumber].slice(0, 1);
      }

      // 출력
      resultData.value = copyData;

      // 시작시 늦게 시작하기
      if (copyData.length === 1) {
        resultData.value = "";
        clearInterval(intervalIndex);
        setTimeout(() => {
          intervalIndex = setInterval(reFunc, timing);
        }, startTiming);
      }
    }
  };

  onMounted(() => {
    intervalIndex = setInterval(reFunc, timing);
  });

  onUnmounted(() => {
    clearInterval(intervalIndex);
  });

  return { resultData };
};
