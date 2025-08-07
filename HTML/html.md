## 1. HTML(HyperText Markup Language)
- 팀 버너스리 개발, W3C에서 HTML 버전 등 관리
- 태그로 불리우며, 시작태그<>, 종료태그</>로 구성
  또는 시작과 종료가 하나의 태그로 구성된 경우도 있음
  예) <h1>내용</h1>, <br/> 등...
- 태그 구성 요소
  <시작태그 속성(Attribute)= "속성내용" 등> 내용 </종료태그>
개발할때는 태그, 구현된 것을 볼때는 엘리먼트

- 모든 컨텐츠는 태그로 작성되어야 함 --> CSS, JS에서 적용 가능하도록

- 특수문자는 그대로 사용하는것이 아닌 엔티티 문자로 입력해야함

## 2. 웹표준
- HTML5 + CSS3 + JQuery ::: 2010년도 중반의 흐름
- 틀, 구조 : HTML
- 모양, 스타일 : CSS
- 동작, 이벤트 : JavaScript, JQuery

HTML4 ~~~~ XHTML(HTML+XML) ~~~~ HTML5
plugin

*JQuery
javascript = netscape(live script) + sum microsystems

## 3. 블록 레벨
- 태그 생성 시 블록 레벨이 정의되어 생성됨
- 브라우저 전체 크기 (width 기준, 100%): block
- heading tag(h1~h6), div, p 태그 등...
- 블록 레벨은 다른 태그를 포함할 수 있다. 일부 태그(div, p ..)
  예) <div>
            <h1>~</h1>
            ...
      </div>
- 다른 태그를 포함하는 태그는 레이아웃 설정 시 사용됨
 : header, main, section, footer, div 등..
- 다른 레벨 형식으로 수정 시 display 속성을 이용함
  예) <h1 style = "display:inline">인라인 레벨로 변경</h1>
- style 속성으로 사이즈를 변경할 수 있다

## 4. 인라인 레벨 - 한문자로 인식
- 태그 생성 시 인라인 레벨로 정의 됨
- 컨텐츠 내용 크기만큼 적용 : inline
- span, button, a, ...
- 인라인 레벨 태그는 인라인 레벨 태그만 일부
 예) <span><a href="">다음</a></span>
- 다른 레벨 형식으로 수정 시 display 속성을 이용함
 예) <span style = "display:block;">블록 레벨로 변경</span>
- style 속성으로 사이즈를 변경할 수 없다! => 블록, 인라인 블록으로 변경

## 5. 인라인-블록 레벨
- 크기는 인라인 적용 되며, 사이즈 조정은 블록처럼 사용되는 태그
- img, video 태그 등이 있음

## 6. 제목 - heading tag
- 출력되는 글씨 크기 순서는 h6 < ~~ <h1
- block level이다
- <h1>~</h1>
- <h2>~</h2>
- <h3>~</h3>
- <h4>~</h4>
- <h5>~</h5>
- <h6>~</h6>

## 7. 문단 - paragraph : <p>~</p>
- 문단을 구성할 때 사용하는 태그
- 인라인 레벨 태그 포함 가능, div, heading.. 태그는 포함 불가능!!

## 8. 목록 표시 : <ul>~</ul>, <ol>~</ol>
- 목록을 표시하는 태그
- 순서가 필요 없이 리스트 표현: <ul>~</ul>
- 순서가 필요한 경우: <ol>~</ol>
- 메뉴리스트, 이미지 리스트 등 생성시 목록 태그를 주로 사용함

## 9. 표 형식: <table> ~ </table>
- 표형식으로 데이터를 표시하는 태그
- 테이블 태그에 포함 되는 한 행은 <tr>~</tr>
- tr 태그 안에 실제 데이터를 포함하는 <th>, <td> 태그로 표현

# 10. 링크 표현<Anchor> : <a>~</a>
- 형식: <a href="절대/상대 경로"> 컨텐츠 </a>
- 다른 사이트나 페이지로 링크를 통해 이동하는 경우
- target 속성은 _self(기본), _blank(새창), _parent(부모 프레임)