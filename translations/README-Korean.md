# 이슈 콜라보

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> 오픈 소스 프로젝트를 찾는 데 도움이 되도록 설계된 검색 도구

## 데모 및 사용법

- 토글 스위치를 사용하여 결과를 필터링합니다. 선택적으로 텍스트 키워드 입력
- 제목을 클릭하여 GitHub의 새 탭에서 문제를 엽니다.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## 배경

이 프로젝트의 아이디어는 GitHub에서 멋진 프로젝트를 찾고 싶지만 GitHub의 기본 검색에 만족하지 않는 데서 나옵니다.

저는 Hacktoberfest(개발자들이 오픈 소스에 참여하도록 권장하는 연례 행사인 Digital Ocean이 후원하는 연례 행사입니다. 한 달에 4번의 PR을 하고 무료 티셔츠 👕) 동안 이슈를 검색하기 시작했습니다.

## 지역개발

Node.js와 NPM이 설치된 경우 로컬 개발을 위해 이 프로젝트를 실행하려면 터미널에서 다음 단계를 따르세요. 앱은 포트 3000에서 실행됩니다.

```bash
npm install
npm start
```

Node.js를 설치하고 싶지 않고 시스템에 Docker가 있는 경우 `Dockerfile`과 전체 애플리케이션을 별도의 컨테이너에 준비하는 스크립트를 사용하면 됩니다. 앱은 포트 3000에서 실행됩니다.

```bash
./dev.sh
```

## 기여

관심을 가져 주셔서 감사합니다! 모든 유형의 기여를 환영합니다. 해킹! 🔨🔨🔨

- 이 저장소 포크 및 복제
- 마스터 브랜치에서 브랜치 생성
- 마스터 브랜치를 베이스로 PR을 열어주세요
- Netlify 배포 미리보기가 올바른지 확인하기 위해 PR 검사를 살펴보십시오.
