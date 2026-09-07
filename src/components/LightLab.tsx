import { useState } from 'react';
export default function LightLab() {
  const [radius, setRadius] = useState(160);
  const [point, setPoint] = useState({ x: 50, y: 45 });
  return <div className="lab">
    <div className="light-scene" role="img" aria-label="마우스나 터치를 따라 움직이는 빛의 감쇠 표현" onPointerMove={e => { const r = e.currentTarget.getBoundingClientRect(); setPoint({ x: (e.clientX-r.left)/r.width*100, y: (e.clientY-r.top)/r.height*100 }); }} style={{ backgroundImage: `radial-gradient(circle ${radius}px at ${point.x}% ${point.y}%, #bef26470, #bef26415 45%, transparent 100%)` }}>
      <span className="scene-label">LIGHT STUDY / 01</span><div className="wire-cube"/><span className="scene-caption">빛을 움직여 보세요 ↗</span>
    </div>
    <div className="lab-controls"><label htmlFor="radius">광원 반경 <output>{radius}px</output></label><input id="radius" type="range" min="60" max="300" value={radius} onChange={e => setRadius(Number(e.target.value))}/><button onClick={() => {setRadius(160);setPoint({x:50,y:45});}}>초기화 ↺</button></div>
    <p className="muted lab-note">CSS 기반 인터랙션 스케치 · 원본 게임 렌더러와 별개의 웹 실험</p>
  </div>;
}
