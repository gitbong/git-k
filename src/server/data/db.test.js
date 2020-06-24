import db from "./db";

describe("db", () => {
  const TABLE = "table1";

  beforeEach(() => {
    db().clear();
  });

  it("should reset database", () => {
    db().addData(TABLE, { name: 1, age: 10 });
    db().clear();
    expect(db().getData(TABLE)).toEqual(null);
    expect(db().getData(TABLE, "0")).toEqual(null);
  });

  it("should add data correctly", () => {
    expect(db().addData(TABLE, { name: 1, age: 10 })).toEqual({
      id: "0",
      name: 1,
      age: 10,
    });
    expect(db().getData(TABLE)).toEqual([{ id: "0", name: 1, age: 10 }]);
  });

  it("should get data correctly", () => {
    db().addData(TABLE, { name: 1, age: 10 });
    expect(db().getData(TABLE, "0")).toEqual({ id: "0", name: 1, age: 10 });
  });

  it("should update data correctly", () => {
    db().addData(TABLE, { name: 1, age: 10 });
    expect(db().updateData(TABLE, "0", { name: 2, age: 11 })).toEqual({
      id: "0",
      name: 2,
      age: 11,
    });
    expect(db().getData(TABLE, "0")).toEqual({ id: "0", name: 2, age: 11 });
  });
});
