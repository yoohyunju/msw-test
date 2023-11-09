// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/node.js";

// 1. Test 실행 전 Mock Server 활성화 (서버 연결)
beforeAll(() => server.listen());

// 2. 테스트 간 요청 핸들러 재설정 (초기화 -> 다른 테스트에 영향 x)
afterEach(() => server.resetHandlers());

// 3. 테스트 실행 후 기본 요청 발행 모듈 복구(clean, 서버 닫음)
afterAll(() => server.close());
