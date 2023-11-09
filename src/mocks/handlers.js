import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    // 기존 응답을 가로채서 Mock 데이터로 응답
    return HttpResponse.json(
      {
        id: 1,
        title: "저녁준비",
      },
      {
        id: 2,
        title: "설거지",
      },
      {
        id: 3,
        title: "청소",
      },
    );
  }),
];
