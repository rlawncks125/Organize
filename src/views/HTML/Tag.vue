<template>
  <code-convert>
    <template #title>
      기본구조
    </template>
    <template #code>
      {{ 기본구조 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      텍스트_관련
    </template>
    <template #code>
      {{ 텍스트_관련 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      목록_관련
    </template>
    <template #code>
      {{ 목록_관련 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      링크_이미지_관련
    </template>
    <template #code>
      {{ 링크_이미지_관련 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      테이블_관련
    </template>
    <template #code>
      {{ 테이블_관련 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      폼_관련
    </template>
    <template #code>
      {{ 폼_관련 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      멀티미디어_관련
    </template>
    <template #code>
      {{ 멀티미디어_관련 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      외부_페이지_삽입
    </template>
    <template #code>
      {{ 외부_페이지_삽입 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      프레임
    </template>
    <template #code>
      {{ 프레임 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      기타
    </template>
    <template #code>
      {{ 기타 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      시멘틱_태그
    </template>
    <template #code>
      {{ 시멘틱_태그 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      지원_부실_태그
    </template>
    <template #code>
      {{ 지원_부실_태그 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      비권장_태그
    </template>
    <template #code>
      {{ 비권장_태그 }}
    </template>
  </code-convert>

  <code-convert>
    <template #title>
      block-Tag정리
    </template>
    <template #content>
      주의사항 <span style="color:red;">!!!!</span>
    </template>
    <template #code>
      {{ blockTag정리 }}
    </template>
  </code-convert>
  <br />

  <code-convert>
    <template #title>
      inline-Tag정리
    </template>
    <template #content>
      주의사항 <span style="color:red;">!!!!</span>
    </template>
    <template #code>
      {{ inlineTag정리 }}
    </template>
  </code-convert>

  <!-- filedset form 요소를 그룹으로 묶어 사각형 박스 안에 랜더링-->
  <fieldset>
    <legend>Form이 묶였어요</legend>
    <form action="">
      <input type="text" name="" id="" />
      <label for="ad"> 라디오 버튼</label>
      <input type="radio" name="ad" id="ar" value="a" />
      <label for="ar">A값</label>
      <input type="radio" name="ad" id="br" value="b" />
      <label for="br">b값</label>
      <br />
      <label for="sel">선택하세요 : </label>
      <select name="sel" id="" style="width:100px;">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
      </select>
      <input type="date" name="" id="" />
      <input type="datetime" name="" id="" />
      <input type="time" name="" id="" />
      <input type="color" name="" id="" />
      <input type="range" name="" id="" />
    </form>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      기본구조: codeProcess(`
      <!DOCTYPE> : 마크업 언어용 DTD 태그이다. HTML5의 경우 맨 위에 다음과 같이 써 주면 된다.
      /ttex)<!DOCTYPE html>

      <html> : 위의 DTD를 제외한 전체를 이 태그로 둘러싼다.

      <head> : HTML 문서의 속성을 지정하기 위한 태그이다. 이 태그 안에 타이틀이나 메타 태그 등을 넣는다.
         
      <title> : HTML의 제목을 선언하는 태그.

      <meta> : HTML의 부가 정보를 선언하는 태그. 예를 들어 charset 속성을 쓰면 인코딩을 선언할 수 있다.

      <link> : 별도의 CSS 선언 파일, 파비콘(홈페이지 제목과 같이 나오는 아이콘) 등을 연결하는 태그.

      <body> : HTML 문서의 본 모양을 나타내기 위한 태그이다. 표시될 문서의 레이아웃을 이 태그 안에 넣으면 된다

      `),
      텍스트_관련: codeProcess(`
      <h[1-6]>: 제목(heading)을 표시할 때 사용된다. <h1>이 가장 크고 <h6>이 가장 작다
      /tt/tt/tt<h1>은 한 문서 안에 하나만 사용하는 것을 권장한다.

      <p>: 새 문단(paragraph)을 연다.

      <b>: 두껍게(bold) 효과를 준다

      <strong>: 포함된 텍스트를 강하게 강조할 때 사용한다.

      <em>: <strong>보다 약한 강조를 나타낼 때 사용한다.

      <i>: 텍스트를 기울임꼴(italic)로 표시한다. 기술 용어, 외국어, 일반적으로 기울임꼴로 사용되는 용어 등을 강조한다.

      <ins>: 문서에 밑줄을 표시한다.

      <u>: 밑줄을 표시한다. 철자 오류를 지적하는데 사용

      <del>: 문서에서 취소선을 표시한다.

      <s>: 취소선을 표시한다. <del>보다 약한 의미

      <sup>: 텍스트를 위첨자(superscript)로 표시한다.

      <sub>: 텍스트를 아래첨자(subscript)로 표시한다.

      <small>: 텍스트를 조금 더 작게 표시한다.

      <br>: 문단 내 줄바꿈(line break).

      <hr>: 가로줄(horizontal rule)을 넣는다

      <pre>: 서식 있는(Preformatted) 텍스트를 넣기 위한 태그이다. 이 태그 안에는 <br> 태그 없이 개행하더라도 개행을 인식하고 공백 문자가 두 개 이상 연속으로 있어도 하나로 취급하지 않고 그대로 표시된다. 또한, 일반적으로 이 태그 안에 들어간 텍스트는 고정폭 글꼴로 표시된다. 이 태그 안에 다른 태그를 넣으면 경우에 따라 의도치 않게 표시될 수도 있으므로 가급적이면 다른 태그를 넣지 않는 것이 좋다.

      <abbr>: 약어를 이 태그로 묶어서 무엇의 약어인지 설명하기 위한 태그이다. <abbr title="약어에 대한 설명">약어</abbr> 식으로 써서 마우스 커서를 대면 설명이 떠서 읽을 수 있게 한다

      // 잘안쓰일거 같은 태그

      <wbr>: 글이 길어질 때 띄어쓰기가 없더라도 이 태그가 쓰인 부분에서 자동개행이 이루어진다. 예를 들어, Java<wbr>Programming이라고 쓰면 개행되지 않을 때는 'JavaProgramming'으로 붙어서 나오지만 자동개행시 <wbr> 태그 앞뒤로 위치한 'Java'와 'Programming'이 서로 분리될 수 있다. 원래는 개행을 방지하는 비표준 태그 <nobr> 안애서 <br> 태그와 같은 기능을 하는 태그였으나 HTML5에서 표준으로 채택되면서 기능이 변경된 것. 코더들 사이에서 이 태그와 SHY 중 무엇을 써야 할 지 의견이 분분하다. 다만 한글은 글자 단위로 개행이 되기 때문에 한글에다가 이 태그를 쓸 필요성은 거의 없다.
      <blockquote>: 인용구를 기술하는 태그이다. 기본적으로 들여쓰기가 되어 있는데 CSS로 없앨 수 있다.
      <q>: <blockquote>의 인라인 버전.
      <dfn>: 후술할 <dl>의 인라인 버전.
      <var>, <samp>, <kbd>, <code>: 변수 등 프로그래밍 언어와의 연계를 위한 태그.
      <ruby>: 후리가나(루비 문자) 표기에 쓰이는 기본 태그. 절대 Ruby를 프로그래밍하기 위한 태그가 아니다!
      <rp>: 후리가나가 지원되지 않는 환경에서 표기할 텍스트를 지정한다.
      <rt>: 후리가나를 쓴다.
      <rb>: 합성어 등으로 후리가나가 여러 단어로 이루어지는 경우 등에 후리가나 영역을 지정하는데 쓰인다. W3C HTML 표준이나 WHATWG HTML Living Standard 표준이 아니다.
      <rtc>: 후리가나의 의미적 주석을 넣는다. W3C HTML 표준이나 WHATWG HTML Living Standard 표준이 아니다.
      `),
      목록_관련: codeProcess(`
      <ol>: 순서 있는 목록(ordered list)을 표시한다.( 기능은 ul와 차이없고 비주얼적인 태그)

      <ul>: 순서 없는 목록(unordered list)을 표시한다.

      <li>: 목록에서 각 항목(list item)은 <li>와 </li>사이에 넣는다.
      
      <dl>: 정의 목록(definition list)을 표시한다.

      <dt>: 정의 목록의 정의(definition term)를 기술한다.

      <dd>: 정의 목록의 뜻풀이(definition description)를 기술한다. 기본적으로 들여쓰기가 되어 있는데 CSS로 없앨 수 있다.

      // 폐기
      <menu>: 웹사이트 내의 상호작용하는 메뉴 목록을 위한 태그이다. <menu>의 경우 본래 <ul> 태그와 별반 차이가 없다는 이유로 폐기되었다가 HTML5.1에서 다시 표준으로 부활하였으나, W3C HTML5.2에서 재차 폐기되었다. 단, WHATWG HTML Living Standard에서는 계속 표준으로 정하고 있다.
      속성 : 
      - type : toolbar와 context가 정의되어 있었으나 W3C HTML5.2에서 폐기, WHATWG HTML Living Standard에서도 폐기되었다.
      - label : 메뉴가 중첩된 경우 메뉴 이름을 지정하는 속성이다. W3C HTML5.2에서 폐기, WHATWG HTML Living Standard에서도 폐기되었다.
      `),
      링크_이미지_관련: codeProcess(`
      <a>: 하이퍼링크를 생성하는 태그이다. href 속성을 써서 <a href="링크할 페이지">내용</a>와 같이 작성한다. 페이지 내의 책갈피를 위한 속성으로 name이 있었으나, id로 대체 가능하여 HTML5에서는 폐기되었다.

      <img>: 페이지에 이미지를 추가하는 태그이다.
      속성 : 
      - src : src: source의 약자로 이미지파일의 경로를 지정하는 태그 속성이다.
      /tt 절대 경로 - http:// 또는 https://
      /tt 상대 경로 - path/to/image/file
      /tt data:image/jpeg|png|gif;base64, A1bC2dE3fG...: 파일을 base64로 인코딩한 형태로 지정한다. 작은 여러 개의 파일이 있을 경우 권장하며, 큰 파일은 절대 권장하지 않는다.
      
      - alt : 이미지를 볼 수 없는 경우에 이미지에 대한 설명을 제공한다. 이 속성값이 없어도 이미지파일의 경로가 유효하다면 표시되기는 하지만 웹표준 검사기에서 걸린다.

      - title : 이미지에 대한 추가 정보를 제공한다. 세피로트 이미지에 마우스를 갖다대면 말풍선으로 뜨는 것을 확인할 수 있다
      
      - height , width : 이미지의 세로, 가로폭을 지정한다. HTML 4.01까지는 그냥 숫자만 쓰면 픽셀로, 뒤에 %를 붙이면 백분율로 지정할 수 있었으나, HTML5에서는 픽셀로만 지정할 수 있게 되었으므로 백분율로 지정하려면 CSS를 이용해야 한다.

      <svg>: 페이지에 SVG 형식의 그래픽을 추가하는 태그이다. SVG 파일은 위의 <img> 태그로 넣어도 되지만 SVG 파일이 XML 형식으로 만들어져 있기에 별도의 SVG 파일을 만들지 않고 직접 코딩해서 넣는 것도 가능하다. 이 때 <svg> 태그를 사용한다.

      <progress>: 페이지에 진행 상황 막대를 추가하는 태그이다. 예를 들어 <progress value="22" max="100"></progress>와 같이 쓸 경우 22% 진행된 막대가 표시된다

      <picture>: 최신 HTML Living Standard에 추가된 이미지 태그로 <audio> 태그와 <video> 태그에 대응한다. 다양한 환경에서 서로 다른 이미지를 띄울 수 있게 한다. W3C HTML 표준에 반영되어 있지 않다.
      `),
      테이블_관련: codeProcess(`
      <table>: 테이블을 만드는 태그이다.

      <tr>: 행(table row)을 시작한다.

      <th>: 테이블의 행, 열의 머리말(table heading)을 나타낸다. 기본적으로 가운데로 정렬되고 굵은 글씨로 표시된다.

      <td>: 표의 내용(table data), 셀을 표현한다.
      속성 : colspan, rowspan속성으로 셀을 병합할 수 있다. 둘 다 써서 행과 열을 함께 병합할 수도 있다.
      - colspan :  열 병합한다.
      - rowspan :  행을 병합한다. 

      <caption>: 테이블의 제목을 기술한다.

      <colgroup>, <col>: 테이블 상단에 넣어 테이블의 열 정보를 기술한다. 주로 일괄적으로 셀의 너비를 지정할 때 쓰인다.

      <thead>, <tbody>, <tfoot>: 테이블의 세부 구조를 기술한다. 각각 표의 상단, 본문, 하단 부분에 대응한다.

      `),
      폼_관련: codeProcess(`
      <form>: 입력값을 받는 영역을 지정한다. 한 페이지에 여러 개가 들어갈 수는 있지만, 영역 안에 영역이 들어가는 것은 불가능하다.

      <input>: 입력값 요소를 지정한다. type에 따라 다른 입력값을 취한다
      type : 

      - text: 한 줄 짜리 문자열 값. 기본값이다.

      - number: 숫자.
      
      - url: 도메인 주소.
      
      - email: 이메일.
      
      - tel: 전화번호.
      
      - search: 검색어.
      
      - range: 지정한 범위의 숫자.
      
      - color: 색.
      
      - date: 날짜.
      
      - time: 시각.
      
      - datetime: 날짜+시각.
      
      - checkbox: 선택/해제할 수 있는 항목.
      
      - radio: 선택/해제할 수 있는 항목이나 중복 선택은 불가능하다. 그리고 해당 항목을 선택할 때는 마음대로이나 해제하는 것은 아니다. 이 속성은 하나의 form 태그 영역 내에서 name 속성이 같은 2개 이상의 <input type="radio">가 있을 경우 선택되지 않은 다른 항목을 누르면 이미 선택되어 있는 것이 해제되는 방식으로 동작한다. 따라서 단독으로 써서는 안 되는 속성이다.
      
      - button: 누를 수 있는 버튼을 생성한다.
      
      - submit: 누를 경우 입력값을 전송시키는 버튼을 생성한다.
      
      - image: submit + <img> 태그.
      
      - reset: 누를 경우 입력값을 초기화시키는 버튼을 생성한다.
      
      - hidden: 투명라인(...). 입력값을 수정하지 않고 곧바로 보낼 때 쓰인다. 소스를 열어보지 않으면 사용자에게는 보이지 않는다.[8]
      
      - file: 파일 업로드에 쓰인다.

      <textarea>: 여러 줄의 문자열 값을 받는다.

      <button>: <input type="button">와 대동소이하다. 차이점은 태그 내에도 HTML 지정이 가능해서 표현의 폭이 넓다. type="submit"을 쓰면 <input type="submit">과 같은 기능을 한다.

      <output>: input 태그처럼 입력값이지만 수정할 수 없다. 외형상으로는 그냥 문자열.

      <datalist>: 검색어에 들어갈 목록을 지정한다.

      <select>: 선택 목록.
      /tt- <option>: 선택 목록에 들어갈 항목. <input type="radio">와 대동소이하다.

      <fieldset>: 폼 요소를 그룹으로 묶어준다. 브라우저에는 이 태그 시작부터 끝까지의 모든 요소를 사각형 박스 안에 묶는 방식으로 렌더링된다
      /tt- <legend>: <fieldset>으로 묶어준 그룹에 제목을 지정해 준다. 브라우저에서는 사각형 박스 왼쪽 상단에 나타난다.

      <label>: 해당 요소의 이름을 지정한다. 해당 이름을 클릭하면 요소가 자동으로 선택된다.
      
      `),
      멀티미디어_관련: codeProcess(`
      <video>: 비디오 재생

      <audio>: 오디오 재생

      <canvas>: 스크립트를 통해 그래픽을 그리는 데 사용될 수 있다. 예를 들어, 그래프 그리기, 사진 합성, 애니메이션 제작, 실시간 비디오 처리, 렌더링에 쓰일 수 있다

      `),
      외부_페이지_삽입: codeProcess(`
      <object>, <embed>: 웹 페이지 또는 외부 프로그램을 임베드한다. 
      HTML 4.01에서 <embed>가 삭제되고 <object>로 대체되었으나 <object> 태그의 사용법이 워낙 복잡하다는 문제점이 있어서 HTML 5 규격에서 다시 표준으로 들어갔다. <embed>의 경우 파이어폭스에서 웹 페이지를 첨부할 수 없는 문제가 있었다.
      `),
      프레임: codeProcess(`
      <iframe> : inline frame의 줄임말이다. <iframe>은 문서 전체가 프레임인 게 아니라 문서 안에 박스형으로 프레임을 넣을 때 쓴다. 이 태그는 HTML5에서도 계속 지원된다. 물론 iframe도 남용하면 웹 접근성 저하되는 건 똑같다.
      속성 :
      -src: 넣을 페이지의 주소를 지정한다.
      
      -height, width: 프레임의 높이, 너비를 지정한다. 물론 CSS를 쓰는 것이 더 좋다.
      
      -sandbox: iframe에 샌드박스 정책을 지정한다. 주로 사용하는 값은 allow-same-origin, allow-popups, allow-scripts 정도.
      
      -frameborder: 프레임의 테두리 표시 여부를 지정한다. 0은 표시하지 않음, 1은 표시함.[5]
      
      -allowfullscreen: HTML5에서 지원하는 속성으로, 전체 화면 모드로 전환할 수 있도록 허용한다
      
      //폐기
      다른 frame 태그는 HTML5에서 폐기하기로 하였다. 프레임(HTML 태그) 문서 참조.
      `),
      기타: codeProcess(`
      <base>: 상대 링크(relative link) 해석의 기준이 되는 URL을 지정한다. tistory.com에 올라온 HTML 파일에 base href가 "http://cafe.naver.com/cafesupport"로 지정되어 있다면 "joonggonara"라는 링크를 걸었을 때 https://cafe.naver.com/joonggonara로 해석된다.

      <style>: CSS 사용. 되도록이면 <link> 태그를 쓰기를 권장한다.

      <script>: 스크립트를 사용한다. &ltscript type="text/javascript"> ... &lt/script > 식으로 스크립트 타입을 지정해서 사용한다. HTML5에서는 type 속성을 생략하면 일반적으로 사용되는 자바스크립트로 인식한다. 인터넷 익스플로러에서는 VB스크립트를 사용할 수도 있었으나

      <div>: 박스 또는 레이어. 일명 '웹 표준' 개념이 많은 사람들에게 퍼지게 된 이후 테이블 태그 대신 레이아웃을 만드는 데 자주 사용되고 있다
      사실 div만 남발하는 것도 올바른 사용법은 아니고, 용도에 따라 여러가지 태그를 적절히 사용하는 것이 중요하다. <div> 이외에도 많은 태그가 <div>와 같은 박스 스타일로 렌더링되기 때문에 CSS만 잘 지정하면 된다.

      <span>: <div>의 인라인 버전.

      <figure>, <figcaption>: 그림이 덧붙여지는 내용 작성에 사용한다.

      `),
      시멘틱_태그: codeProcess(`
      시멘틱 태그 : HTML5에서 추가된 태그들이다. 디자인을 할 때 <table> 대신 <div>를 쓸 것을 권장했더니 그 부작용으로 코드가 온통 <div> 투성이라 알아보기 어렵다는 지적이 있었다. 그래서 HTML5에서 나온 것이 시맨틱 태그이다.

      //선언문
      <!DOCTYPE html>

      //레이아웃 태그

      <header> : 일반적으로 페이지나 해당 섹션의 가장 윗부분에 위치한다.
      페이지 맨 위에 쓸 때는 사이트의 제목이 보통 들어가며, 선택적으로 상단바나 검색창 등이 안에 들어갈 수 있다.

      <nav> : 내비게이션(navigation)의 약자로, 일반적으로 상단바 등 사이트를 안내하는 요소에 사용된다.
      보통은 안에 <ul>을 넣어 목록 형태로 사용한다.

      <main> : 문서의 주된 콘텐츠를 표시한다. 이 태그는 두 개 이상 보여져서는 안 된다
      두 개 이상의 main 요소를 쓸 경우 하나 이외의 전부를 hidden 속성을 써서 가려야 한다

      <article> : 웹 페이지의 내용에 사용하는 태그이다.
      문서나 페이지, 사이트에서 독립적으로 배포 혹은 재사용(예를 들어 투고 같은)할 수 있는 섹션에 사용한다

      <section> : 웹 페이지의 섹션에 사용하는 태그이다.
      웹 페이지를 의미적으로 각각의 파트로 구분하기 위해 쓰는 태그이다.

      <aside> : 본문의 주요 부분을 표시하고 남은 부분을 설명하는 태그이다.
      특별한 일이 아니면 사이드바나 광고창 등 중요하지 않은 부분에 사용된다.

      <footer> : 일반적으로 페이지나 해당 파트의 가장 아랫부분에 위치한다.
      페이지 맨 아래에 쓸 때는 사이트의 라이선스, 주소, 연락처 등을 넣는다.

      // 멀티미디어 태그

      <audio> : 음성, 음악 파일 등을 재생할 수 있는 태그
      멀티브라우저 지원을 위해서는 <source> 태그를 안에 넣어 두가지 이상의 확장자를 가진 음악 파일을 넣어야 한다. 가장 많이 사용하는 조합은 mp3+ogg.

      <video> : 영상 파일을 재생할 수 있는 태그
      별다른 플러그인 없이도 자체 재생이 가능하다는 점이 가장 큰 장점이다.
      <audio> 태그와 마찬가지로 <source> 태그를 넣어 mp4+ogv의 조합으로 짜주면 거의 대부분의 브라우저를 지원한다.

      <canvas> : 스크립트를 이용하여 그래픽을 표현하는 태그이다.
      일반적으로는 JavaScript를 많이 사용하며, 응용하면 웹에서 게임 앱, 3D 엔진 등을 돌리는 다양한 응용이 가능하다

      //폼관련 

      <output> : 계산의 결과값을 전송하는 데에 쓰인다.

      <datalist> : <input>의 type="text"와 같은 속성을 가진 것들에 들어갈 값을 미리 정의하는 태그이다.

      새로운 <input>의 type 속성 : date, datetime, time, color, range 등
      JavaScript를 통해서만 구현됐던 기능이 내장되었다. 현 시점에서는 크롬이 사실상 전부를 지원한다

      // 기타 태그

      <menu> : 툴바, 팝업 메뉴를 넣을 때 쓴다. 현재는 FireFox에서만 적용된다

      <menuitem> : 툴바, 팝업 메뉴의 각 항목을 정의한다.

      <details> : 보이거나 숨기게 해주는 요약글 형식의 위젯에 사용되는 태그이다. <summary> 태그와 함께 쓰인다.

      <embed> : 외부 애플리케이션이나 플러그인을 삽입할 때 쓰는 태그이다. 대표적으로 어도비 플래시를 웹페이지에 삽입할 때 이걸 쓴다.

      <object> : 외부 문서, 매체, 플러그인 등을 웹페이지에 삽입할 때 쓰는 태그

      <figure> : 그림, 도표, 다이어그램 등의 글의 이해를 돕기 위한 내용들을 나타내는 태그

      <figcaption> : <figure> 태그 안에 사용되는 태그로, <figure> 태그 안에 있는 내용의 설명을 적는 태그이다.

      <iframe> : 외부 문서를 해당 영역에 삽입하는 태그이다. HTML 5에서 sandbox 속성이 추가되었다

      <time> : 기계가 이해하기 쉽게 시간을 표현한다. CSS를 정하지 않았다면 외관상의 변화는 없다.
      <time datetime="2001-05-15 19:00">n시간 전</time> 같이 datetime에 그레고리력 시간을 넣어 태그를 작성해야 기계가 이해하기 쉬워진다.

      <mark> : 특정한 부분을 형광펜으로 마킹한다.

      // 용도가 바뀐 태그
      
      <b> :본래는 굵은 글씨를 표현하는 비주얼적인 요소만 있던 태그였고 HTML 4.01에서 비권장 태그로 들어갔으나, HTML5에서 <strong>보다 약한 강조의 의미를 갖는 태그로 변경되었다. 여전히 별도의 CSS 없이 쓰면 브라우저에서는 굵은 글씨가 나오는 것이 기본값이다.
      
      <s> : 더이상 옳지 않은 내용을 나타내는 데에 쓴다. 별도의 CSS 없이 쓰면 브라우저에서는 취소선을 긋는 것이 기본값이다.
      
      <u> : 양식상 일반적인 텍스트보다 돋보여야 할때 쓴다. 예를 들어 철자가 틀린 단어나, 중국어로 번역된 고유 명사 등이 있다. 별도의 CSS 없이 쓰면 브라우저에서는 밑줄을 긋는 것이 기본값이다.
      
      <i> : 어떠한 이유로 일반적인 텍스트보다 돋보여야 할때 쓴다. 예를 들어 전문 용어, 외국어의 구절 등이 있다. 별도의 CSS 없이 쓰면 브라우저에서는 이탤릭체로 표기하는 것이 기본값이다. font-awesome 같은 글꼴 형태로 된 아이콘이 이 태그를 사용해서 아이콘을 출력한다. 아이콘의 특징이 텍스트보다 돋보여야 하니 사용법이 틀린 것은 아니다.
      
      더 적절한 시맨틱 태그가 있을 경우 그쪽을 쓴다.
      
      <hr> : 원래 단순한 가로줄을 나타내는 태그였으나, 페이지의 주제가 바뀔 때 내용을 분리시키는 의미가 HTML5에서 추가되었다.
      
      <wbr> : 원래 <nobr> 태그 안에서 <br> 태그를 대신하여 강제개행 기능을 하는 태그였으나, HTML5 표준으로 편입되면서 띄어쓰기 없이 이 태그를 사용한 부분에서 자동개행을 하는 기능으로 변경되었다.(<nobr> 태그는 CSS로 대체 가능하여 폐기되었다)

      `),
      지원_부실_태그: codeProcess(`
      <dialog> : 다이얼로그 상자를 위한 태그이다. 아직은 크롬과 오페라에서만 지원하며 그마저도 아직 완전하지 않다.
      `),
      비권장_태그: codeProcess(`
      // 표준에서 제외된 태그
     
      <acronym>: 두문자어에 대한 설명을 넣기 위한 태그이다. HTML5 규격에서는 <abbr> 태그에 통합되어서 없어졌다.
      
      <applet>: Java Applet을 넣기 위한 태그이다. <embed> 또는 <object> 태그로 대체 가능하여 폐기되었다.
      
      <basefont>: 페이지의 기본 글꼴을 지정한다. 지정 가능한 범위는 글꼴 색과 모양, 크기였다. 하지만 CSS로 인해 굳이 이 태그를 써야 할 이유가 사라지면서 IE 9를 끝으로 지원 중단됨에 따라 완전히 사장되었다. 당연히 HTML5 규격에서도 없어졌다. 조작할 수 있는 기본 모양이 이 태그보다 압도적으로 많은 CSS를 쓰길 권장한다.
      
      <big>: 글꼴 크기를 상대적으로 크게 한다. HTML5에서 없어졌으니 크기를 숫자로 표현 할 수 있는 CSS를 쓰길 권장한다. CSS로 font-size: larger; 속성을 주면 이 태그와 효과가 같아진다. 하지만 반대 기능을 하는 <small>은 존치되어 있다.
      
      <center>: 글자를 가운데 정렬한다. 이것도 HTML5에서 없어졌으니 오른쪽 정렬과 왼쪽 정렬 등 다양하게 표현할수 있는 CSS를 쓰자. 인라인 요소에서는 text-align: center;, 블록 요소에서는 margin: 0 auto;로 대체할 수 있다.
      
      <dir>: 디렉터리 목록을 만들기 위한 태그로 안에 <li> 태그를 넣어 사용한다. HTML5 규격에서는 <ul> 태그에 통합되어서 없어졌다.
      
      <font>: 글꼴 특성을 지정한다. 글꼴 이름이나 크기나 기타 등등. HTML 4.01 비권장 태그이므로 <span style="…">…</span>을 사용하자. 아예 HTML5 규격에서는 없어졌다. CSS를 쓰면 글꼴뿐만 아니라 조작할 수 있는 모양이 압도적으로 많으니 그걸 쓰자. 애초에 CSS가 도입된 이유가 이런 <font> 태그와 같이 HTML 코드에 디자인적인 요소를 욱여넣다 보니 코드가 개판이 되어버리는 상황을 개선하기 위함이었다. HTML 문서에 디자인적인 요소를 직접 사용하는 것을 지양하여야 한다는 기조가 HTML5에서 확립되면서 표준에서 배제된 대표적인 태그로 꼽힌다.
      속성:
      
      - color: 글꼴의 색을 지정할 수 있다. 이 속성은 CSS의 color 속성으로 매우 간단하게 대체할 수 있다.
      
      - face: 글꼴의 이름을 지정할 수 있다. 이 속성은 CSS의 font-family 속성으로 대체할 수 있고 이 태그와는 다르게 복수 지정이 가능하다. 
      
      - size: 1부터 7까지 가능하다. 이 속성은 CSS의 font-size 속성으로 대체할 수 있다. 1번부터 순서대로 각각 x-small(10px), small(13px), medium(16px), large(18px), x-large(24px), xx-large(32px), 48px에 대응한다.
      
      <frame>, <frameset>, <noframe>: 프레임(HTML 태그) 참고.
      
      <isindex>: 색인 페이지에 검색창을 넣는다. 이미 폼 태그로도 충분히 대체할 수 있어 폐기되었다.
      
      <strike>: 취소선을 긋는다. <del> 또는 <s> 태그로 대체 가능하여 폐기되었다.
      
      <tt>: 텔레타이프 글꼴로 한다. HTML5에서 사용이 불가하니 더 다양한 글꼴을 표현할 수 있는 CSS를 쓰자. 다만 이와 비슷한 <kbd>, <code>, <samp>[9] 태그는 HTML5 규격에 존치되어 있다.

      // 그외 채택이 거부된 태그      
      
      <blink>: 넷스케이프에서 글자를 깜빡이게 하는 비표준 태그였다. 정보적인 기능이 없는 태그인데다가, 광과민성 발작 증세가 있거나 정신이 산만한 사람에게는 접근을 방해하는 장벽으로 작용하여 표준 채택이 거부되었다. 다만, 구태여 이 효과를 쓰고자 한다면 CSS의 애니메이션 기능이나 JavaScript로 대체할 수 있다. 여담으로, 구글 검색창에 'blink tag'라고 쳐 보면 검색 결과에서 'blink', 'tag', '블링크 태그' 등 검색어와 일치하는 부분들이 이 태그를 쓴 것처럼 깜빡이는 이스터 에그가 있다.
      
      <bgsound>: 배경음악을 넣는 태그이다. IE 전용 비표준 태그이므로 HTML5에서 추가된 <audio> 등으로 대체하는 것을 추천한다.
      
      <marquee>: 글자를 화면 위에 흐르게 한다. <blink>와 같은 이유로 표준으로 채택되지 않았다. 이 태그도 역시 CSS의 애니메이션 기능이나 JavaScript로 대체할 수 있다. <blink> 태그와 마찬가지로 구글 검색창에 'marquee tag'라고 쳐 보면 위쪽의 검색 결과 수와 소요시간을 요약하는 부분이 이 태그를 쓴 것처럼 왼쪽으로 흐르는 이스터 에그가 있다.
      
      <multicol>: 글을 다단으로 표시되게 한다. CSS의 Multiple Columns로 대체 가능하여 표준으로 채택되지 않았다.
      
      <nobr>: 이 태그 안에서는 줄바꿈이 되지 않는다. 비표준 태그였고 CSS의 white-space: nowrap;으로 대체할 수 있어 표준으로 채택되지 않았다.
      
      <noembed>: 위의 <noframe>처럼 <embed> 태그를 지원하지 않는 브라우저에서 메시지를 대신 표시하도록 하는 태그였다. 하지만 <embed> 태그가 HTML5 표준에 포함됨에 따라 존재의 의미가 사라진 관계로 폐기되었다.
      
      <xmp>: 이 태그 안에 들어간 텍스트는 보통 텍스트(plain text)로 변하여 안의 태그가 무시된다. HTML5에서는 폐기되었으므로 이와 비슷한 기능을 하는 <pre> 태그로 대체할 것을 권고한다. 단 <pre> 태그는 안에 들어간 HTML 태그를 무시하지 않기 때문에 완전히 같은 기능으로 쓰려면 서버 사이드 스크립트나 JavaScript를 먼저 거쳐서 HTML 태그를 없애서 출력해야 한다.

      `),
      blockTag정리: codeProcess(`
        //blocktag
        <address>
        <bolckquote>
        <center>
        <dor>
        <div>
        <dl>
        <fieldset>
        <form>
        <h1~h6>
        <hr>
        <menu>
        <p>
        <noframes>
        < ul / ol / li >
        <pre> 

        //테이블
        <table>
        <tody>
        <thead>
        <tr>
        <td>
        <th>
        `),
      inlineTag정리: codeProcess(`
        //inlineTg
        <a>
        <abbr>
        <br >
        <button>
        <font>
        <i>
        <iframe>
        <img>
        <input>
        <label>
        <q>
        <select>
        <span>
        <strike>
        <strong>
        <sub>
        <textarea>
        <u>
        `),
    });

    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
