# 백엔드 API 명세서

## 목차
1. [인증](#1-인증)
2. [랜딩 페이지](#2-랜딩-페이지)
3. [대시보드](#3-대시보드)
4. [고객 문의 관리](#4-고객-문의-관리)
5. [설정](#5-설정)
6. [공통 사항](#공통-사항)

---

## 1. 인증

### 1.1 관리자 로그인
- **목적**: 관리자 대시보드 접근을 위한 인증 처리
- **필요성**: 휴대폰 판매점 관리자가 안전하게 대시보드에 접근하여 고객 문의, 영업 현황 등을 관리할 수 있도록 인증이 필요합니다.
- **Method**: `POST`
- **Endpoint**: `/api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "string",
    "user": {
      "id": "string",
      "email": "string",
      "name": "string"
    }
  }
  ```

---

## 2. 랜딩 페이지

### 2.1 도입 문의하기 폼 제출
- **목적**: 랜딩 페이지에서 도입 문의 폼 제출 시 이메일 전송 및 문의 데이터 저장
- **필요성**: 잠재 고객(중소기업)이 My Agent 서비스 도입에 관심을 보일 때, 회사명, 연락처, 문의 내용을 받아 영업팀에 전달하고 후속 상담을 진행하기 위해 필요합니다.
- **Method**: `POST`
- **Endpoint**: `/api/contact`
- **Request Body**:
  ```json
  {
    "name": "string",
    "company": "string",
    "phone": "string",
    "email": "string",
    "message": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "문의가 성공적으로 전송되었습니다."
  }
  ```
- **Note**: 이메일 전송 로직 포함

---

## 3. 대시보드

### 3.1 대시보드 통합 데이터 조회
- **목적**: 관리자 대시보드에 표시되는 모든 영업 인사이트 데이터를 한 번에 조회
- **필요성**: 
  - 점주가 매장 현황을 한눈에 파악할 수 있도록 오늘의 문의 수, 미응답 알림, 상담 성공률 등 핵심 지표를 제공합니다.
  - 시간대별 문의 추이를 통해 고객 상담이 집중되는 시간대를 파악하여 인력 배치에 활용할 수 있습니다.
  - 인기 모델, 가입 유형 비율, 통신사 선호도 등 영업 전략 수립에 필요한 데이터를 제공합니다.
  - AI 미응답 질문과 모델 재고 상태를 통해 즉시 대응이 필요한 사항을 파악할 수 있습니다.
  - 고객 페르소나 분석을 통해 고객들의 주요 관심사(공시지원금, 할부, 가족결합 등)를 파악하여 맞춤형 상담 전략을 수립할 수 있습니다.
- **Method**: `GET`
- **Endpoint**: `/api/dashboard`
- **Query Parameters**: `date` (optional, format: YYYY-MM-DD, default: today)
- **Response**:
  ```json
  {
    "summary": {
      "todayInquiries": {
        "count": 24,
        "changeFromYesterday": 5,
        "changePercent": 26
      },
      "unansweredAlerts": {
        "count": 3,
        "waitingTime": "30분 이상"
      },
      "successRate": {
        "percentage": 68,
        "changePercent": 8,
        "period": "이번 주 평균"
      }
    },
    "inquiryChart": [
      { "time": "09시", "inquiries": 4 },
      { "time": "10시", "inquiries": 8 },
      { "time": "11시", "inquiries": 12 }
    ],
    "popularModels": [
      {
        "rank": 1,
        "name": "iPhone 15 Pro Max",
        "inquiries": 47,
        "trend": "+12%"
      },
      {
        "rank": 2,
        "name": "Galaxy S24 Ultra",
        "inquiries": 38,
        "trend": "+8%"
      },
      {
        "rank": 3,
        "name": "Galaxy Z Flip 5",
        "inquiries": 24,
        "trend": "+5%"
      }
    ],
    "unansweredAlerts": [
      {
        "id": "1",
        "inquiryId": "1",
        "name": "김민수",
        "model": "iPhone 15 Pro",
        "timeAgo": "15분 전"
      }
    ],
    "subscriptionTypes": [
      { "name": "번호이동 (MNP)", "value": 45 },
      { "name": "기기변경 (KGB)", "value": 35 },
      { "name": "신규가입", "value": 20 }
    ],
    "carrierChannel": [
      { "name": "SKT", "매장방문": 45, "온라인상담": 32 },
      { "name": "KT", "매장방문": 38, "온라인상담": 28 },
      { "name": "LG U+", "매장방문": 25, "온라인상담": 18 }
    ],
    "aiUnanswered": [
      {
        "id": "1",
        "question": "아이폰 16 프로맥스 1TB 모델 재고가 언제 들어오나요?",
        "timestamp": "2시간 전",
        "customerName": "김민수",
        "inquiryId": "1"
      }
    ],
    "modelStockStatus": [
      {
        "id": "1",
        "name": "iPhone 16 Pro Max",
        "inquiries": 47,
        "stockStatus": "low",
        "stockCount": 3
      },
      {
        "id": "2",
        "name": "Galaxy S24 Ultra",
        "inquiries": 38,
        "stockStatus": "normal",
        "stockCount": 12
      }
    ],
    "customerPersona": [
      { "label": "공시지원금", "count": 142, "trend": "up" },
      { "label": "24개월 할부", "count": 98, "trend": "up" },
      { "label": "가족 결합", "count": 76, "trend": "stable" }
    ]
  }
  ```

### 3.2 지식베이스 업데이트
- **목적**: AI 챗봇이 답변하지 못한 질문에 대한 답변을 지식베이스에 추가하여 향후 자동 응답 가능하도록 개선
- **필요성**: 
  - AI 챗봇이 처음 접하는 질문이나 특수한 케이스에 대해 답변하지 못할 때, 관리자가 직접 답변을 입력하여 지식베이스를 확장합니다.
  - 이를 통해 챗봇의 응답 정확도를 지속적으로 향상시키고, 반복적인 질문에 대한 자동화 수준을 높일 수 있습니다.
  - 예: "아이폰 16 프로맥스 1TB 모델 재고가 언제 들어오나요?" 같은 질문에 답변을 추가하면, 이후 동일한 질문이 들어왔을 때 자동으로 답변할 수 있습니다.
- **Method**: `POST`
- **Endpoint**: `/api/knowledge-base/update`
- **Request Body**:
  ```json
  {
    "questionId": "string",
    "question": "string",
    "answer": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "지식베이스가 업데이트되었습니다."
  }
  ```

---

## 4. 고객 문의 관리

### 4.1 고객 문의 목록 조회
- **목적**: AI 챗봇을 통해 문의한 고객들의 문의 내역을 조회
- **필요성**: 
  - **고객 문의란**: 챗봇을 통해 제품이나 서비스에 관심을 보인 고객의 문의 내역을 의미합니다. 휴대폰 판매점에서는 "아이폰 15 가격이 궁금해요" 같은 채팅 문의를 한 고객의 문의 내역이 여기에 해당합니다.
  - 점주가 모든 고객 문의를 한눈에 보고, 우선순위를 정하여 상담을 진행할 수 있도록 합니다.
  - 필터링(미응답 전용, 방문 예약 등)과 검색 기능을 통해 특정 조건의 문의를 빠르게 찾을 수 있습니다.
  - 예: "30분 이상 응답이 없는 문의"만 필터링하여 즉시 상담이 필요한 고객을 우선 처리할 수 있습니다.
- **Method**: `GET`
- **Endpoint**: `/api/inquiries`
- **Query Parameters**:
  - `filter` (optional: "all" | "unanswered" | "reservation", default: "all")
  - `search` (optional: string)
  - `page` (optional: number, default: 1)
  - `limit` (optional: number, default: 20)
- **Response**:
  ```json
  {
    "inquiries": [
      {
        "id": "1",
        "name": "김민수",
        "model": "iPhone 15 Pro Max",
        "inquiryType": "가격문의",
        "lastResponseTime": "15분 전",
        "status": "미응답"
      }
    ],
    "total": 8,
    "page": 1,
    "limit": 20
  }
  ```

### 4.2 고객 문의 상세 조회
- **목적**: 특정 고객 문의의 상세 정보와 AI 챗봇과의 대화 기록을 조회
- **필요성**: 
  - 문의 목록에서 특정 고객을 클릭했을 때, 해당 고객의 연락처, 관심 기종, 문의 유형 등 상세 정보를 확인합니다.
  - AI 챗봇과의 대화 기록을 통해 고객이 어떤 질문을 했고, 어떤 답변을 받았는지 파악하여 맞춤형 상담을 진행할 수 있습니다.
  - 예: "아이폰 15 프로맥스 가격 문의 → 블루 티타늄 256GB 재고 확인 → 할부 조건 문의" 같은 대화 흐름을 보면, 고객이 구매 의사가 높다는 것을 파악할 수 있습니다.
- **Method**: `GET`
- **Endpoint**: `/api/inquiries/:id`
- **Response**:
  ```json
  {
    "id": "1",
    "name": "김민수",
    "phone": "010-1234-5678",
    "model": "iPhone 15 Pro Max",
    "inquiryType": "가격문의",
    "createdAt": "2026-01-18T14:30:00Z",
    "lastResponseTime": "15분 전",
    "status": "미응답",
    "conversations": [
      {
        "id": "1",
        "role": "user" | "bot",
        "content": "string",
        "timestamp": "14:30"
      }
    ]
  }
  ```

### 4.3 고객 문의 상태 변경
- **목적**: 고객 문의의 진행 상태를 업데이트하여 상담 프로세스를 관리
- **필요성**: 
  - **문의 상태란**: 고객과의 상담 진행 상황을 추적하기 위한 상태값입니다.
  - **상태 종류**:
    - `미응답`: 아직 상담원이 응답하지 않은 상태 (우선 처리 필요)
    - `상담중`: 현재 상담원이 고객과 상담을 진행 중인 상태
    - `방문예약`: 고객이 매장 방문을 예약한 상태 (매장 준비 필요)
    - `구매완료`: 고객이 제품을 구매한 상태 (성공 케이스)
    - `이탈`: 고객이 더 이상 관심을 보이지 않는 상태 (분석 필요)
  - 점주가 각 문의의 상태를 변경함으로써 상담 파이프라인을 관리하고, 어떤 단계에서 고객이 이탈하는지 분석할 수 있습니다.
  - 예: "상담중" → "방문예약" → "구매완료"로 상태를 변경하면, 전체 상담 프로세스의 성공률을 추적할 수 있습니다.
- **Method**: `PATCH`
- **Endpoint**: `/api/inquiries/:id/status`
- **Request Body**:
  ```json
  {
    "status": "상담중" | "미응답" | "방문예약" | "구매완료" | "이탈"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "inquiry": {
      "id": "1",
      "status": "상담중"
    }
  }
  ```

---

## 5. 설정

### 5.1 프로필 조회
- **목적**: 현재 로그인한 관리자의 프로필 정보 조회
- **필요성**: 설정 페이지에서 현재 계정 정보(이름, 이메일)를 확인하고 수정할 수 있도록 합니다.
- **Method**: `GET`
- **Endpoint**: `/api/settings/profile`
- **Response**:
  ```json
  {
    "name": "관리자",
    "email": "admin@example.com"
  }
  ```

### 5.2 프로필 수정
- **목적**: 관리자의 이름, 이메일 등 프로필 정보 수정
- **필요성**: 관리자가 계정 정보를 변경할 수 있도록 합니다. (예: 이메일 주소 변경, 이름 변경)
- **Method**: `PATCH`
- **Endpoint**: `/api/settings/profile`
- **Request Body**:
  ```json
  {
    "name": "string" (optional),
    "email": "string" (optional)
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "user": {
      "name": "string",
      "email": "string"
    }
  }
  ```

### 5.3 비밀번호 변경
- **목적**: 관리자 계정의 비밀번호 변경
- **필요성**: 보안을 위해 정기적으로 비밀번호를 변경하거나, 비밀번호가 유출되었을 때 즉시 변경할 수 있도록 합니다.
- **Method**: `PATCH`
- **Endpoint**: `/api/settings/password`
- **Request Body**:
  ```json
  {
    "currentPassword": "string",
    "newPassword": "string"
  }
  ```
- **Response**:
  ```json
  {
    "success": true
  }
  ```

### 5.4 알림 설정 조회/업데이트
- **목적**: 관리자가 받을 알림의 종류와 방법을 설정
- **필요성**: 
  - 점주가 원하는 알림만 받도록 설정하여 불필요한 알림을 줄이고, 중요한 알림을 놓치지 않도록 합니다.
  - **새 문의 알림**: 새로운 고객 문의가 들어왔을 때 즉시 알림 (실시간 대응 가능)
  - **미응답 알림**: 30분 이상 응답하지 않은 문의가 있을 때 알림 (고객 이탈 방지)
  - **일일 리포트**: 매일 저녁 하루 요약 리포트를 이메일로 받을지 설정 (영업 현황 파악)
- **Method**: `GET` / `PATCH`
- **Endpoint**: `/api/settings/notifications`
- **Request Body** (PATCH):
  ```json
  {
    "newInquiry": true,
    "unanswered": true,
    "emailReport": false
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "settings": {
      "newInquiry": true,
      "unanswered": true,
      "emailReport": false
    }
  }
  ```

### 5.5 보안 설정 조회/업데이트
- **목적**: 계정 보안 관련 설정 관리
- **필요성**: 
  - **2단계 인증**: 로그인 시 비밀번호 외에 추가 인증(예: SMS 인증코드)을 요구하여 보안을 강화합니다.
  - **세션 타임아웃**: 일정 시간(예: 30분) 동안 활동이 없으면 자동으로 로그아웃되어, 다른 사람이 컴퓨터를 사용할 때 계정이 노출되는 것을 방지합니다.
- **Method**: `GET` / `PATCH`
- **Endpoint**: `/api/settings/security`
- **Request Body** (PATCH):
  ```json
  {
    "twoFactorAuth": false,
    "sessionTimeout": true
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "settings": {
      "twoFactorAuth": false,
      "sessionTimeout": true
    }
  }
  ```

---

## 공통 사항

### 인증
- 관리자 API는 JWT 토큰이 필요합니다
- Header: `Authorization: Bearer {token}`

### 에러 응답 형식
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

### 상태 코드
- `200`: 성공
- `201`: 생성 성공
- `400`: 잘못된 요청
- `401`: 인증 실패
- `403`: 권한 없음
- `404`: 리소스 없음
- `500`: 서버 오류

---

**마지막 업데이트**: 2026-01-19

