import './App.css';
import Elixirs from './Elixirs';
// import img1 from './images/yellow.gif';
// import img2 from './images/chai.gif';
// import img3 from './images/black.gif';

function App() {
  const yellowTxt = `
  허브, 미네랄, 부드러운 감귤에 레몬을 섞은 비타민이 
  풍부한 최고의 음료로 하루 종일 면역 계통을 최상의 
  상태로 유지할 수 있어요.
  `
  const chaiTxt = `
  일반 차이티가 아닙니다. 이 음료는 마테차에 차이티 
  성분을 섞은 다음 얼음에 카페인 맛이 나는 초콜릿을 
  살짝 넣은 음료입니다.
  `
  const blackTxt = `
  기억력이 좋아지면 좋겟죠? 검은 우롱차와 에스프레소를 
  살짝 섞어 만든 블랙 브레인 음료를 드셔보세요.
  머리가 좋아지는 음료입니다.
  `
  return (
    <div id="elixirs">
      <div id="headerTxt">
        주간 음료 스페셜
      </div>
      <Elixirs src="/images/yellow.gif" title="레몬 브리즈" content={yellowTxt} />
      <Elixirs src="/images/chai.gif" title="차가운 차이맛 음료" content={chaiTxt} />
      <Elixirs src="/images/black.gif" title="블랙 브레인 음료" content={blackTxt} />
      <div id="line_h">
        <span>저녁시간에 언제든지 방문해서 이 음료뿐 아니라 다른
          <a href="" id="aDrink"> 음료</a>도 즐겨보세요.</span>
      </div>
    </div>
  );
}

export default App;
