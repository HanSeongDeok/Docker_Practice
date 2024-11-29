# Docker_Practice

- 도커 연습장
- 코딩 애플님 강의 참조

### 가상화 컨테이너에서 로컬로 복사
- ``` docker cp container_ID:/app local-path ```

### 컨테이너 변경 내용을 도커 허브에 PUSH
-  COMMIT - 
``` docker commit container_ID new_Image:tag ```

-  PUSH - ``` docker tag new_Image:tag myusername/myrepo:tag ```
