import { render, screen } from "@testing-library/react";
import App from "./App";

describe("TODO List", () => {
  test("TODO라는 제목이 있다.", () => {
    render(<App />);
    const title = screen.getByText("TODO");
    expect(title).toBeInTheDocument();
  });
});

test("리스트가 잘 나온다. (", async () => {
  render(<App />);
  const list = await screen.findAllbyRole("listitem");
  expect(list).toHaveLength(3);
});