import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("defaults drugs to an empty array when no arguments are passed to the pharmacy constructor", () => {
    expect(new Pharmacy().updateBenefitValue()).toStrictEqual([]);
  });

  it("doesnt decreases benefit of Magic Pills when expired", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", -1, 2)]).updateBenefitValue(),
    ).toStrictEqual([new Drug("Magic Pill", -1, 2)]);
  });

  it("increases the benefit of Fervex only by 1 when expiring in less than 11 days and benefit is 49", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 49)]).updateBenefitValue(),
    ).toStrictEqual([new Drug("Fervex", 9, 50)]);
  });

  it("increases the benefit of Fervex only by 1 when expiring in less than 6 days and benefit is 49", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 49)]).updateBenefitValue(),
    ).toStrictEqual([new Drug("Fervex", 4, 50)]);
  });

  it("decreases dafalgan benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 5, 10)]).updateBenefitValue(),
    ).toStrictEqual([new Drug("Dafalgan", 4, 8)]);
  });
});
