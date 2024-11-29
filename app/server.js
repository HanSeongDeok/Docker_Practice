// server.js
const express = require('express'); // Express 모듈 가져오기
const app = express();             // Express 앱 생성
const PORT = 3000;                 // 서버 포트 설정

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Express server.');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
