import * as Utils from "./add";

describe("add", () => {
  it("should add two values", () => {
    let value = Utils.addTwice(1, 2);
    expect(value).toBe(6);
  });

  it("should add two values", () => {
    let value = Utils.addTwice("1", "2");
    expect(value).toBe(6);
  });

  it("should add two values (async)", async () => {
    let value = await Utils.addTwice("1", "2");
    expect(value).toBe(6);
  });

  it("should throw exception if invalid value provided", () => {
    expect(() => {
      Utils.addTwice({}, "2");
    }).toThrow();
  });
});
