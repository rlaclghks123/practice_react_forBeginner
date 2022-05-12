# 1. React for Beginner-2022


| Feature     | Image                                      |
| ----------- | ------------------------------------------ |
| Home Page   | <img src="img/home.jpg" width="300"><br>   |
| Detail Page | <img src="img/detail.jpg" width="300"><br> |

<hr>
<br>
<br>

- ## <배운 이론 및 사용된 기술>

  - - [x]  Dom(document Object Model)   
          
          - DOM이란, 객체를 통해 구조화된 문서를 표현하는 방법이다.
          - DOM은 트리형태로 되어 있어서 특정 node를 찾을 수도 있고 수정하거나 제거 할 수 있다.

   ---

  - - [x]  Virtual DOM
          
           - VirtualDOM을 이용하면 실제 DOM에 접근하여 조작하는 대신에, 이를 추상화시킨 자바스크립트 객체를 구성하여 사용한다.
           
           - DOM의 상태를 메모리에 저장하고 변경 전과 변경 후의 상태를 비교한 뒤 최소한의 내용만 반영하는 기능이다.
           
           - VirtualDOM은 DOM의 상태를 메모리 위에 올려두고 DOM에 변경이 있을 때만 해당 변경을 반영한다.
           
           - 리액트가 모든 처리를 대신 해주기 때문에 DOM API 조작 작업을 신경쓸 필요가 없다.
   ---

  - - [x]  Virtual DOM을 사용하는 이유.
          
           - 큰 규모의 웹을 사용할 경우 스크롤을 내리다보면 수많은 데이터 로딩이 되고 각 데이터를 표현하는 요소도 많아지게 된다. 이와 같은 요소의 갯수가 몇백개 몇천개 단위로 많아진 상태에서 DOM에 직접 접근하여 변화를 주면 성능상 이유가 발생하게 된다. 

           -DOM자체가 javascript엔진에 비해 느려서가 아니라, 브라우저 단에서 DOM의 변화가 일어나면 CSS를 다시 연산하고 레이아웃을 구성하고 웹 페이지를 다시 그려야 하기 떄문에 시간적인 소모가 심해진다.
         
            --> 하지만 Virtual DOM을 사용하면 최소한으로 DOM을 실행하기 떄문에 성능이 느려지지 않는다.
   ---   

  - - [x]  React DOM
          
          - React DOM이란 Virtual DOM에서 HTML을 생성하는 데 필요한 라이브러리이다.

          - React DOM에는 리액트 엘리먼트를 브라우저에 렌더링하는데 필요한 모든 도구가 들어 있다.

          - render 메소드와 서버에서 사용하기 위한 renderToString과 renderToStaticMarkup 메소드가 있다.
   ---

  - - [x]  DOM 작동원리
          
          1. 데이터가 업데이트 되면, 전체 UI를 Virtual DOM에 리렌더링 한다.
          
          2. 이전 Virtual DOM에 있던 내용과 현재의 내용을 비교한다.
          
          3. 바뀐 부분만 실제 DOM에 적용이 된다. (컴포넌트가 업데이트 될때, 레이아웃 계산이 한번만 이루어짐)

          ==> 따라서 React는 지속해서 데이터가 변화하는 대규모 애플리케이션 구축에 적합하다. 그리고 추가적으로 React에서 추가된 Redux를 사용하면 Flux패턴(단방향)을 사용하게 된다.
   ---   


  - - [x]  React
         
          -  React는 페이스북에서 개발하여 웹에서 상호작용하는 UI를 만들기 위해 사용하는 JavaScript의 Library 이다.
          
          - 웹에서도 사용할수 있고, React-native를 통해 앱으로도 사용할 수 있다.
    ---

  - - [x]  JSX
         
          -  JavaScript의 확장 문법이며 공식 JavaScript문법은 아니지만, babel을 통해 변환하여 사용 할 수 있다. 
          문법 규칙 : 1. 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
               ex) return ( <div><h1>Hello</h1> <h2>Bye<h2></div>) 

                  1. JavaScript 문법을 사용할려면 {}로  감싸서 표현한다. 
                   ex) <h1>Hello {name} </h1>

                  2. 3항 연산자 사용이 가능하다. 
                  ex) {name==='chiman' ? (<h1>CHI MAN</h1>) : (<h1>Anonymous</h1>)} 

                     
  - - [x]  State
         
          
          - State : 변수 대신 사용하는 데이터의 저장 공간이며 데이터가 변경되면, 자동으로 Re Render하여 새로고침 없이 동작시킬 수 있다.
        
                사용방법
                1. React 라이브러리에 있는 useState()를 사용하며, 초기값을 설정해준다.
                ex) const [state, setState] = useState(0) 

                2. Event를 사용하여, state의 변화를 setState에 저장해준다.
                ex) const onClick = () => {setState(state+1)};

                3. 원하는곳에 사용해준다.
                ex) <button>onClick={onClick}<button> 
        ---

  - - [x]  Props    
 
          - Props : properties의 줄임말으로서 부모컴포넌트로 부터 자식 컴포넌트에 데이터를 보낼 수 있는 방법이다. 함수에서 인자를 보내는것 과 비슷하다.
          style, event , text, boolean 많은것들을 props로 보낼 수 있다. 
          같은코드의 일부분만 다를 경우, 복사 붙혀넣기를 계속 하는 대신, props를 사용하면 코드의 반복을 줄일수 있다.

           사용방법
           1. 인자를 보내준다. 
           ex) <div><Button text="Add"></div>

           2. 받은 인자를 통해 사용하길 원하는 곳에 값을 지정해준다. 
            ex-1) function Button(props) {<button>{props.text}</button>}
            ex-2)function Button({text}) {<button>{text}</button>}

   ---

  - - [x]  Prop Types
     
          - Prop Types : Props로 주는 데이터의 형식을 지정 하여 에러를 방지 할 수 있는 패키지이다.

            사용방법
            1. prop-types를 import 한다. 
            ex) import PropTypes from "prop-types";
            
            2. 원하는 컴포넌트의 type을 지정해준다.
            Ex) Button.propTypes = { text: PropTypes.string.isRequired }


  - - [x]  Create-React-App
 
          - Create-React-App : 간단히 CRA 라고 부르며, CRA는 리액트 개발을 바로 시작할 수 있도록 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해주는 도구이자 명령어이다.  특정 환경의 개발을 바로 진행할 수 있도록 만든 기초 환경을 통틀어 보일러 플레이트(boiler plate)라고 부르기도 하는데, CRA는 그러한 보일러 플레이트의 일종입다.  React Application을 만들때 가장 좋은 Tool이며 분할 방식 하기에 아주 좋다.

            사용방법
            1. npx를 설치한다.  npm i npx -g
            2. npx create-react-app 원하는 폴더명을 터미널에 입력한다. ex) npx create-react-app react_for_Beginner
            3. VsCode로 폴더를 실행한다.
            4. 사용할 폴더를 생성 or 사용하지 않는폴더를 삭제 등 작업한다.
            5. npm start를 통해 실행한다.
      ---
      
  - - [x]  useEffect
 
          - useEffect : React가 계속 rerender할때 한번만 실행후 rerender되지 않도록 하는 함수로서, API호출이나 중요한 일을 할때와 같이 한번만 코드를 실행 하고, 값이 변하지 않는 한 re render되지 않도록 한다.
          사용방법
          1. import 한다. import {useEffect} from "react" 
          2. useEffect의 기본형태 : useEffect(function, deps); deps란 배열 형태이며, 배열 안에는 검사하고자 하는 특정값 또는 빈배열이 들어간다.
          3. useEffect를 사용한다. ex) useEffect(Afunction, [keyword]) => keyword가 변화할때 Afunction이 한번만 작동한다.
          2-2. 만약 한번만 사용하고 싶다면 []를 빈 배열로 작성해준다. Ex) useEffect(Afunction, [])

  - - [x]  useEffect

          - Clean Up : useEffect를 사용할때 코드가 Destory될때 작동하는 함수이다. useEffect함수 내에 코드를 실행하고 return 후에 코드를 작성해주면 된다.  
          사용방법:  useEffect(()=>{aFunction return()=> cleanUp Function},[])

