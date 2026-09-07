# Portfolio
개인 포트폴리오 / Personal Portfolio

채원형의 게임·그래픽스 개발 경험을 소개하는 React + TypeScript + Vite 웹사이트.

## 실행
Node.js 22.12 이상 권장. `.nvmrc`는 22를 사용합니다.

```bash
npm ci
npm run dev
npm run typecheck
npm run build
npm run preview
```

## 구성
- `src/App.tsx`: 소개, 프로젝트 필터, 상세 펼치기, 외부 링크
- `src/data/projects.ts`: 프로젝트 설명과 링크
- `src/components/LightLab.tsx`: 포인터·슬라이더 기반 CSS 조명 스케치
- `src/styles.css`: 반응형 스타일과 키보드 포커스
- `netlify.toml`: 빌드, 배포 출력, SPA fallback 설정
- `docs/ROADMAP.md`: 후속 작업

## Netlify 연결
Netlify에서 기존 Git 저장소 가져오기를 선택하고 `WonhyeongChae/Portfolio`를 연결합니다.
배포 브랜치는 `main`, 빌드 명령은 `npm run build`, 게시 폴더는 `dist`입니다.
해당 값은 `netlify.toml`에 포함되어 있습니다. 이번 스타터 작성은 Netlify 사이트 생성이나 배포를 수행하지 않습니다.

## 콘텐츠 원칙
프로젝트 카드의 그래픽은 장식용이며 게임 스크린샷이 아닙니다.
Light Lab은 CSS 기반 웹 인터랙션이며 C++ 원본 렌더러나 성능 벤치마크가 아닙니다.
프로젝트별 본인 기여와 팀 전체 구현을 구분하고 측정하지 않은 성능 수치를 기재하지 않습니다.
외부 프로젝트 코드·이미지의 라이선스는 해당 원본을 따릅니다.

## 추가 개발
실제 화면과 영상, 확인된 코드 발췌를 추가한 다음 WebGL 데모와 영문 콘텐츠를 확장합니다.
비밀 키는 저장소에 넣지 않습니다. 현재 사이트는 환경 변수나 백엔드가 필요하지 않습니다.
