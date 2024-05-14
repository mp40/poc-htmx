import { test, expect } from "vitest";
import { wiringTest } from ".";

test("wiring", () => {
  expect(wiringTest()).toBe("working");
});
