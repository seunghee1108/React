// npm install react react-dom 

// React 모듈 가져오기
import React from 'react';
// ReactDOM 모듈 가져오기
import ReactDOM from 'react-dom';

// React 컴포넌트 정의
const App = () => {
  // React 엘리먼트 생성 - 제목 (h1 태그)
  const title = React.createElement('h1', null, 'Hello, React without JSX!');
  // React 엘리먼트 생성 - 문단 (p 태그)
  const paragraph = React.createElement('p', null, 'This is a React component without JSX.');
  
  // 최상위 컴포넌트 생성 (div 태그) - title과 paragraph를 자식으로 포함
  return React.createElement('div', null, title, paragraph);
};

// React 컴포넌트 렌더링
ReactDOM.render(App(), document.getElementById('root'));
