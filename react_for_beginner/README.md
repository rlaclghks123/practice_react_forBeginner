 ## React-for-beginner 

<hr>

## ReactJs 
- [x] ReactJs Vs Vanilla Js

      - React JS를 배우는 이유 
        - Vanilla JS는 html을 먼저 작성 후 JS를 사용하는 반면, React JS는 JS에서 먼저 작성후 html을 업데이트 한다.
        - React JS는 보다 interactive한 웹사이트를 만들기 위해 사용하는 library이다.

- [x] Dom

        -  DOM(Document Object Model)은 MDN에 따르면 HTML, XML 문서의 프로그래밍 interface이다. 즉 웹 페이지를 이루는 요소들(태그 등)을 자바스크립트가 이용을 할 수 있게 브라우저 내에서 트리 구조로 만든 객체 모델이다.

- [x] Virtual Dom

        -  서버로부터 데이터를 받아올때, 계속 업데이트 된다면 무리가 될것이다. 
        따라서 Virtual Dom을 통해 실제 DOM에 직접 접근하는 대신에, 이를 자바스크립트 객체로 구성하여 DOM을 추상화하여 사용하는 방식이다.
        - React를 사용할 때에는 React가 모두 처리를 해주기 때문에, DOM API를 직접 구현하지 않아도 된다.


 - [x] React Dom

        -  library 또는 Package 인데, 모든 React Element들을 HTML에 둘수 있는 최상위 객체이다.
      
        - 리액트 컴포넌트는 React.createElement를 통해 엘레먼트에 대한 정보를 가지는 Object를 생성하고 이를 In-Memory에 저장하고 ReactDOM.render 함수를 통해 Web API(document.createElement)를 이용해서 실제 웹 브라우저에 그려주는 방식으로 동작한다.

- [x] JSX

        - JSX는 자바스크립트를 확장한 문법이다. 공식적인 자바스크립트 문법이 아니기 때문에, 브라우저에서 실행하기 전 일반적으로 Babel을 사용하여, 일반 자바스크립트 코드로 변환해서 사용된다.

        Jsx문법 규칙
        1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.
        Ex) 에러코드 : return (<span>1</span> <span>2</span>)
        Ex) 정상코드 : return (<div><span>1</span> <span>2</span></div>)
        <></> 이런식으로 감싸줄수도있다. Ex) (<><span>1</span> <span>2</span></>)

        2. 자바스크립트 표현식을 사용할려면 {} 로 감싸줘야 한다. Ex) {style={}}, {Object.property}

        3. 조건문 연산자  : if문을 사용할 수 없으므로 3항연산자를 사용할 수 있다. {A ? B : C}

        4. 일반 자바스크립트와 다른것 : class가 아닌, className으로 사용,  event의 target이 아닌 currentTarget 등

- [x] State

        - State는 한 컴포넌트 안에서 유동적인(변경가능한) 데이터를 다룰 때 사용되며, 컴포넌트 안에서 데이터를 변경할 수 있습니다. 즉, State는 한 컴포넌트의 상태(State)를 나타낸다.
        Props와 차이점은 State는 컴포넌트 내에서 사용된다는 점이다. 함수안에서 사용되는 변수같은 느낌

        -useState Hook
        useState() 을 사용하여 State를 사용할수있다. 기본형태 : const [data,setData] = useState(초기값) 
        Ex) const [data, setData] = useState(0);
        Data를 통해 유동적인 데이터를 다루고, setData()를 통해 데이터를 수정할 수 있다. 

        -state 변경하는법 
        1. 직접할당 : setData(data+1)  
        2. 함수 할당 : setData((prev)=>prev+1) 현재값을 통해서 변경하는것이 좀더 안전하다.

- [x] Props

        - Props는 부모 컴포넌트에서 자식컴포넌트로 Data를 보내는 방법이며, 자식 컴포넌트에선 Data를 수정할수없다. 즉 읽기전용 

        사용방법 
        1. 부모컴포넌트에서 Props를 보낸다. Ex) <Parent text="Code">
        2. 자식 컴포넌트에서 props를 받는다. Ex) function Children(props){<h1>{props.text}</h1>}
        그러나 좀더 간편하게 props를 받을수있다. Ex) function Childeren({text}){<h1>{text}</h1>}

- [x] Props Types

        - Props를 주는 Data의 Type을 지정하여 에러를 방지할 수 있다. 

        사용방법
        1. 설치 및 import 한다
        2. 기본형태 : 사용할 컴포넌트.propTypes={property: PropTypes.원하는 Type}
        Ex) Btn.propTypes = {text:PropTypes.string}     
        
- [x] Create-react-app

        - React를 만든 페이스북(Facebook)에서 Create React App이라는 CLI(커맨드 라인 인터페이스) 도구를 만들었으며, 이 도구를 사용하면 Babel, webpack과 같이 build 도구를 따로 설정할 필요가 없다.

        사용방법.
        1. NodeJs를 다운받는다. 
        2. npx react-create-app 원하는 폴더명 을 터미널에 입력한다.
        Ex) npx react-create-app react_for_beginner
        3. npm start를 통해 시작해준다.

- [x] useEffect

        - 컴포넌트가 reRender될때마다 특정 작업을 할 수 있는 React Hook이다.
        
        기본형태 : useEffect(Afunction,[]) 
        1. 한번만 실행 하도록 하기 : 기본형태와 같이 사용 할 수 있다. Ex) useEffect(()=>{...},[])
        2. 특정값이 변할때 실행하도록 하기 : Ex) useEffect(()=>{...},[변하는값]) //변하는값이 여러개도 가능 
        3. 2개,3개의 조건을 필요로 하는 경우 : Ex) useEffect(()=>{if(keyword!=“” && keyword.length>5)},[keyword])