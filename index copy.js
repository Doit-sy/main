// 1. express 라이브러리 불러오기
const express = require('express');

// 2. express 앱 생성
const app = express();

// 3. 포트 번호 지정
const PORT = 3000;

// 4. JSON 요청을 처리할 수 있도록 설정
app.use(express.json());

// 5. 기본 라우트 설정: http://localhost:3000/ 로 접속하면 나올 내용
app.get('/', (req, res) => {
  res.send('서연의 첫 백엔드 서버야!');
});

// 6. API 라우트 예시: JSON으로 응답하는 경로
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// 7. 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중이야`);
});
