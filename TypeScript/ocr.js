// ocr (Optical Character Recognition) 광학문자인식
// 이미지,그림 상의 글씨를 텍스트 데이터로 치환

// const Tesseract = require("tesseract.js");

import { createWorker } from "tesseract.js";

const worker = createWorker({
  logger: (m) => console.log(m),
});

(async () => {
  await worker.load();
  await worker.loadLanguage("eng+kor");
  await worker.initialize("eng+kor");
  const {
    data: { text },
  } = await worker.recognize(
    "https://tesseract.projectnaptha.com/img/eng_bw.png"
  );
  console.log(text);
  await worker.terminate();
})();
