# Portfolio roadmap

## 현재 구현
- 한국어 단일 페이지, 데스크톱·모바일 레이아웃
- Lost Light / Refraction / Vulkan 소개 및 저장소 링크
- 프로젝트 필터, 기여 설명 펼치기
- 포인터와 키보드 슬라이더로 조절하는 CSS 광원 스케치
- Vite / TypeScript 및 Netlify 설정

## 다음 단계
1. 실제 프로젝트 스크린샷·영상 추가 (사용 권한과 출처 확인)
2. Lost Light 개발 소스 확보, 배치 렌더링 코드 문서 연결
3. Refraction 본인 변경 커밋 중심으로 기술 사례 정리
4. 영문 콘텐츠 및 프로젝트별 독립 URL
5. WebGL 조명 데모와 실제 측정 기반 배치 비교
6. Netlify Git 연동 후 배포 URL과 모바일 실기기 확인

## 검증 기준
- npm ci && npm run build
- 375px / 1440px에서 가로 넘침 없음
- 프로젝트 필터와 details가 키보드로 동작
- 광원 슬라이더 변경 및 초기화
- 모든 외부 링크 유효성
- 렌더링 데모는 원본 C++ 구현과 웹 재구현을 명시
