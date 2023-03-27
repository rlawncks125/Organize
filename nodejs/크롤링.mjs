// puppeteer
// puppeteer은 브라우저를 띄어 데이터를 가져오기때문에
// ssr이나 spa 등 동적 페이지를 가져오기좋다
import puppeteer from "puppeteer";

// cheerio
// 통신으로 가져온 html데이터를 편하게
// 데이터 추출하게 해주는 라이브러리
import cheerio from "cheerio";

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto("https://nuxt-shop.kimjuchan97.xyz/item/12");

// el 요소 접근
//  await page.waitForSelector(searchResultSelector);

// el 요소 이벤트 발생
//  await page.click(searchResultSelector);

// 키보드 이벤트 발생
// await page.keyboard.press('Enter');

// input 요소 값 입력
// await page.type('.search-box__input', '입력값');

// Set screen size
// await page.setViewport({ width: 1080, height: 1024 });

// 현재 페이지 html 데이터
const content = await page.content();

await browser.close();

// cheerio
const $ = cheerio.load(content);

// console.log($(".bg-gray-600 div").first().html())

$(`.bg-gray-600 div`).each((i, element) => {
  const el = cheerio.load(element);

  /** el 데이터 접근 방법 */
  console.log(el.text());
  // ==
  console.log($(element).text());

  /** */
});

// cypress 로 요소찍어서 하면될거같음

// console.log($(":nth-child(4) > .!flex > .text-[1em]").first().text());
