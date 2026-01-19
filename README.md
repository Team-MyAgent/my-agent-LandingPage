# MyAgent Frontend

MyAgent의 통합 프론트엔드 애플리케이션입니다. 랜딩 페이지와 관리자 대시보드가 하나의 프로젝트로 통합되어 있습니다.

## 프로젝트 구조

이 프로젝트는 두 개의 주요 섹션으로 구성되어 있습니다:

- **랜딩 페이지** (`/`): 고객용 마케팅 페이지
  - 메인 페이지 (`/`)
  - 요금제 페이지 (`/pricing`)

- **관리자 대시보드** (`/admin`): 관리자용 대시보드
  - 로그인 (`/admin`)
  - 대시보드 (`/admin/dashboard`)
  - 리드 관리 (`/admin/leads`)
  - 리드 상세 (`/admin/leads/:id`)
  - 설정 (`/admin/settings`)

## 프로젝트 정보

**Repository**: https://github.com/Team-MyAgent/pure-logic-loom.git

## 기술 스택

- **Vite** - 빌드 도구
- **TypeScript** - 타입 안정성
- **React 18** - UI 라이브러리
- **React Router DOM** - 라우팅
- **TanStack Query** - 서버 상태 관리
- **shadcn-ui** - UI 컴포넌트
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **Recharts** - 차트 라이브러리
- **Lucide React** - 아이콘

## 디렉토리 구조

```
src/
├── admin/              # 관리자 대시보드 관련 파일
│   ├── components/     # 관리자 전용 컴포넌트
│   │   ├── dashboard/  # 대시보드 컴포넌트
│   │   ├── layout/     # 레이아웃 컴포넌트
│   │   └── leads/      # 리드 관리 컴포넌트
│   └── pages/          # 관리자 페이지
├── components/         # 공통 컴포넌트
│   └── ui/            # shadcn-ui 컴포넌트
├── pages/              # 랜딩 페이지
├── hooks/              # 커스텀 훅
└── lib/                # 유틸리티 함수
```

## 시작하기

### 필수 요구사항

- Node.js 18+ 및 npm
- [nvm 설치 가이드](https://github.com/nvm-sh/nvm#installing-and-updating)

### 설치 및 실행

```sh
# 1. 저장소 클론
git clone https://github.com/Team-MyAgent/pure-logic-loom.git

# 2. 프로젝트 디렉토리로 이동
cd landing-page

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

개발 서버가 시작되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run build:dev` - 개발 모드 빌드
- `npm run preview` - 빌드 결과 미리보기
- `npm run lint` - 코드 린팅
- `npm test` - 테스트 실행
- `npm run test:watch` - 테스트 감시 모드

## 라우팅

### 랜딩 페이지
- `/` - 메인 페이지
- `/pricing` - 요금제 페이지

### 관리자 대시보드
- `/admin` - 로그인 페이지
- `/admin/dashboard` - 대시보드
- `/admin/leads` - 리드 목록
- `/admin/leads/:id` - 리드 상세
- `/admin/settings` - 설정

## 스타일링

프로젝트는 Tailwind CSS를 사용하며, 딥 에메랄드(#006155)를 메인 컬러로 사용합니다.

- **메인 컬러**: Deep Emerald (#006155)
- **폰트**: 
  - Display: Plus Jakarta Sans
  - Body: Noto Sans KR

## 개발 가이드

### 코드 편집 방법

**Lovable 사용**

Lovable 프로젝트 페이지를 방문하여 프롬프트로 편집할 수 있습니다. 변경사항은 자동으로 이 저장소에 커밋됩니다.

**로컬 IDE 사용**

원하는 IDE에서 저장소를 클론하고 변경사항을 푸시하면 Lovable에도 반영됩니다.

**GitHub에서 직접 편집**

- 원하는 파일로 이동
- 우측 상단의 "Edit" 버튼(연필 아이콘) 클릭
- 변경사항 커밋

**GitHub Codespaces 사용**

- 저장소 메인 페이지에서 "Code" 버튼 클릭
- "Codespaces" 탭 선택
- "New codespace" 클릭하여 새 환경 실행
- Codespace 내에서 파일 편집 후 커밋 및 푸시

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 배포

### Lovable를 통한 배포

[Lovable 프로젝트](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)를 열고 Share -> Publish를 클릭하여 배포할 수 있습니다.

### 커스텀 도메인 연결

Lovable 프로젝트에서 커스텀 도메인을 연결할 수 있습니다.

- Project > Settings > Domains로 이동
- "Connect Domain" 클릭

자세한 내용: [커스텀 도메인 설정](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 주요 기능

### 랜딩 페이지
- 히어로 섹션
- 주요 기능 소개
- 이용 방법 안내
- FAQ 섹션
- 문의하기 폼
- 실시간 채팅 위젯

### 관리자 대시보드
- 대시보드 통계 및 차트
- 리드 관리 시스템
- 대화 기록 타임라인
- 상태 관리 기능
- 알림 시스템

## 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 라이선스

이 프로젝트는 Team-MyAgent의 소유입니다.
