# MSW 스터디

## Skills

- msw
- Redux Toolkit

## Mocking Apis

| 구분          | 도메인 | uri                     | method | body                                 | response |
| ------------- | ------ | ----------------------- | ------ | ------------------------------------ | -------- |
| 회원가입      | Auth   | /api/auth/register      | POST   | {username: string, password: string} | User     |
| 로그인        | Auth   | /api/auth/login         | POST   | {username: string, password: string} | User     |
| 로그인 확인   | Auth   | /api/auth/check         | GET    | null                                 | User     |
| 로그아웃      | Auth   | /api/auth/logout        | POST   | null                                 | null     |
| 투두 추가     | Todo   | /api/todos              | POST   | {content: string}                    | Todo     |
| 투두목록 조회 | Todo   | /api/todos              | GET    | null                                 | Todo[]   |
| 투두 조회     | Todo   | /api/todos/:id          | GET    | null                                 | Todo     |
| 투두 수정     | Todo   | /api/todos/:id          | PATCH  | {content: string}                    | Todo     |
| 투두 삭제     | Todo   | /api/todos/:id          | DELETE | null                                 | null     |
| 투두 토글     | Todo   | /api/todos/complete/:id | PATCH  | null                                 | Todo     |

### Response Type

```ts
type User = {
  id: string;
  username: string;
};

type Todo = {
  id: string;
  content: string;
  isCompleted: boolean;
  publishedDate: Date;
};
```
