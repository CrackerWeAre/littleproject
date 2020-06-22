# MeerKat On Air

## 로컬 실행 방법

### Requirements

- [Node.js](https://nodejs.org/ko/)



- [Git](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)



### Git clone

```bash
git clone https://github.com/CrackerWeAre/littleproject
```

### Build project

```bash
cd littleproject
npm install --silent
npm install react-scripts@3.4.1 -g --silent
```

### Start project

```bash
cd frontend/client/
npm start
```

### 수정사항 반영

```bash
npm run-script build
```

이후 SouceTree 혹은 Git으로 commit 해준 후

서버에서 git pull 하면 수정사항이 반영됨.