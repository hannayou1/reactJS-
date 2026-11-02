# FRAME/FILM

2026년 한국 개봉 영화의 박스오피스와 작품 정보를 살펴보는 React 웹사이트입니다.

## 주요 기능

- 영화 제목, 줄거리, 출연진 검색
- 국내/외국 작품 필터와 작품별 상세 페이지
- 관객 수와 매출 기준, 데이터 출처 및 산정 방식 안내
- 서비스 소개, 개인정보처리방침, 문의 페이지

## 실행

```bash
npm install
npm start
```

프로덕션 빌드는 `npm run build`로 생성합니다.

## 데이터와 배포 전 확인

영화 데이터는 `src/movie_list.json`에 저장되어 있으며 박스오피스 통계 출처로 KOBIS를 표시합니다. 데이터 파일에 반영된 기준일은 화면에 제공되지 않으므로, 배포 전 원자료와 작품 정보의 정확성 및 갱신 일정을 확인해야 합니다. 문의 이메일을 공개할 수 있게 되면 `src/routes/Contact.js`와 `src/routes/Privacy.js`의 안내를 실제 연락처로 바꾸세요.

사이트 공개 주소: https://react-js-alpha-flax.vercel.app/