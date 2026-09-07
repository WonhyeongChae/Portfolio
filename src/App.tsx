import { useState } from 'react';
import LightLab from './components/LightLab';
import { projects } from './data/projects';
export default function App() {
  const [filter, setFilter] = useState('전체');
  const visible = projects.filter(p => filter === '전체' || (filter === '게임' ? p.id !== 'vulkan' : p.id === 'vulkan'));
  return <>
    <a className="skip" href="#main">본문 바로가기</a>
    <header><a className="brand" href="#home">WC<span> / </span>채원형</a><nav aria-label="주 메뉴"><a href="#projects">프로젝트</a><a href="#lab">인터랙티브</a><a href="#about">소개</a><a href="https://github.com/WonhyeongChae">GitHub ↗</a></nav></header>
    <main id="main"><section id="home" className="hero"><div><p className="eyebrow"><span className="dot"/> GAME & GRAPHICS PROGRAMMER</p><h1>플레이를 만들고,<br/><em>화면의 원리를</em><br/>탐구합니다.</h1><p className="intro">채원형 · Wonhyeong Chae<br/>C++로 게임플레이와 렌더링, 제작 도구를 구현합니다.</p><a className="primary" href="#projects">프로젝트 살펴보기 <span>↗</span></a></div><div className="hero-art" aria-hidden="true"><div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/><div className="core"/><span className="coordinate">X 0.00 / Y 1.00 / Z 0.00</span><span className="art-title">FROM LOGIC<br/>TO PIXELS.</span></div></section>
    <div className="skill-strip"><span>C++</span><span>GAMEPLAY</span><span>RENDERING</span><span>DEVELOPMENT TOOLS</span></div>
    <section id="projects"><div className="section-head"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>구현으로 말하는 경험</h2></div><div className="filters" aria-label="프로젝트 필터">{['전체','게임','그래픽스'].map(f => <button key={f} aria-pressed={filter===f} onClick={() => setFilter(f)}>{f}</button>)}</div></div><div className="project-grid">{visible.map((p,i) => <article key={p.id} className={`project ${p.id}`}><div className="project-cover" aria-hidden="true"><span>0{i+1}</span><div className="project-symbol"/ ><strong>{p.name}</strong></div><div className="project-body"><p className="eyebrow">{p.category}</p><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><details><summary>기여와 구현 내용</summary><p className="role">{p.role}</p><p>{p.focus}</p><p>{p.result}</p></details><a className="text-link" href={p.url} target="_blank" rel="noreferrer">저장소 보기 ↗</a></div></article>)}</div></section>
    <section id="lab" className="lab-section"><div><p className="eyebrow">02 / INTERACTIVE LAB</p><h2>직접 움직이는<br/>작은 실험실.</h2><p className="intro">빛의 위치와 반경을 바꾸며<br/>화면의 변화를 살펴보세요.</p><p className="muted">마우스 · 터치 · 키보드로 반경 조절</p></div><LightLab/></section>
    <section id="about" className="about"><div><p className="eyebrow">03 / ABOUT</p><h2>동작하는 기능 너머,<br/>함께 작동하는 시스템으로.</h2></div><div><p>게임의 입력과 충돌부터 렌더링과 에디터까지, 서로 연결되는 시스템을 다뤄 왔습니다. 구현 결과와 문제 해결 과정을 중심으로 경험을 기록합니다.</p><p>더 큰 맵을 처리하기 위한 배치 렌더링, 게임 로직 간 충돌을 검증하는 별도 빌드처럼 구체적인 문제에서 출발합니다.</p><div className="contact-links"><a href="https://www.linkedin.com/in/wchae" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/WonhyeongChae" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    </main><footer><span>© {new Date().getFullYear()} Wonhyeong Chae</span><a href="#home">맨 위로 ↑</a></footer>
  </>;
}
