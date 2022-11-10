# market

## 개발 Notion Link
https://mellow-deer-e21.notion.site/4-e8e221543d50424b8994a4a3991e5eb1

## 1. 프로젝트 목적
- 마켓 상품 관리
- 기능 : 회원 가입 및 로그인, 판매자 등록, 마켓 상품 관리 (상품 등록/수정/삭제/상세조회, 필터 검색 및 정렬)

## 2. 백엔드 프로젝트 구성
1) 서버 : Nestjs
2) DB : MongoDB (Docker)

## 3. API 명세
| API 명세 |  |  |  |  |
| --- | --- | --- | --- | --- |
| INDEX | METHOD | URI | DESCRIPTION | REMARK |
| 1 | POST | /api/users/signup | 회원가입 | O |
| 2 | POST | /api/users/signin?email=&pw= | 로그인 | O |
| 3 | POST | /api/markets/:userId | 판매자 등록 | O |
| 4 | POST | /api/products | 상품 등록 | O |
| 5 | PATCH | /api/products | 상품 수정 | O |
| 6 | DELETE | /api/products/:productId | 상품 삭제 | O |
| 7 | GET | /api/products | 마켓 상품 전체 조회 | O |
| 8 | GET | /api/products/:id | 상품 ID로 조회 | O |
| 9 | GET | /api/products/name?name= | 상품명 검색 | O |
| 10 | GET | /api/products/category?name= | 카테고리별 검색 | O |
| 11 | GET | /api/products/country?name= | 국가별 검색 | O |
| 12 | GET | /api/products?order_by=&order= | 최신 순/주문 마감일 순 정렬 | O |

## 4. ERD 설계
| User |  |  |
| --- | --- | --- |
| Column | Type | Description |
| id | string |  |
| email | string |  |
| hash | string |  |
| marketId | array |  |

| Market |  |  |
| --- | --- | --- |
| Column | Type | Description |
| id | string |  |
| name | string |  |
| userid | array |  |
| productId | array |  |

| Product |  |  |
| --- | --- | --- |
| Column | Type | Description |
| id | string |  |
| name | string |  |
| cost | int |  |
| category | string |  |
| country | string |  |
| expiredAt | Date |  |
| marketId | array |  |

## 미비 사항 및 추후 적용 예정 사항

