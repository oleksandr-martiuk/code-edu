import waitForExpect from "wait-for-expect";
import { logMessages } from "./exercise1";
import { delay } from "./exercise2";

describe("Exercises tests", () => {
  beforeAll(() => {
    console.log.mockClear();
  });

  test("exercise number 1 - when logging messages the logs should be printed in a known order", async () => {
    jest.spyOn(console, "log");

    logMessages();

    // We're waiting for the 4 calls of the `console.log`
    await waitForExpect(() => {
      expect(console.log).toHaveBeenCalledTimes(4);
    });

    expect(console.log).toHaveBeenNthCalledWith(1, "aaa");
    expect(console.log).toHaveBeenNthCalledWith(2, 1);
    expect(console.log).toHaveBeenNthCalledWith(3, 2);
    expect(console.log).toHaveBeenNthCalledWith(4, 3);
  });

  test("exercise number 2 - when using the delay function the execution will hold the stated amount of time", async () => {
    const startTime = Date.now();

    await delay(1000);

    expect(Date.now() - startTime).toBeGreaterThanOrEqual(1000);
  });

  // Exercise number 3's test:
  // Codesandbox has not `useFakeTimers` and `mockImplementation` capabilities, so unfortunately we can't test this here.
});
