import { Drug, Pharmacy } from "./pharmacy";

const originalOutput = [
  [
    {
      name: "Doliprane",
      expiresIn: 19,
      benefit: 29,
    },
    {
      name: "Herbal Tea",
      expiresIn: 9,
      benefit: 6,
    },
    {
      name: "Fervex",
      expiresIn: 11,
      benefit: 36,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 18,
      benefit: 28,
    },
    {
      name: "Herbal Tea",
      expiresIn: 8,
      benefit: 7,
    },
    {
      name: "Fervex",
      expiresIn: 10,
      benefit: 37,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 17,
      benefit: 27,
    },
    {
      name: "Herbal Tea",
      expiresIn: 7,
      benefit: 8,
    },
    {
      name: "Fervex",
      expiresIn: 9,
      benefit: 39,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 16,
      benefit: 26,
    },
    {
      name: "Herbal Tea",
      expiresIn: 6,
      benefit: 9,
    },
    {
      name: "Fervex",
      expiresIn: 8,
      benefit: 41,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 15,
      benefit: 25,
    },
    {
      name: "Herbal Tea",
      expiresIn: 5,
      benefit: 10,
    },
    {
      name: "Fervex",
      expiresIn: 7,
      benefit: 43,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 14,
      benefit: 24,
    },
    {
      name: "Herbal Tea",
      expiresIn: 4,
      benefit: 11,
    },
    {
      name: "Fervex",
      expiresIn: 6,
      benefit: 45,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 13,
      benefit: 23,
    },
    {
      name: "Herbal Tea",
      expiresIn: 3,
      benefit: 12,
    },
    {
      name: "Fervex",
      expiresIn: 5,
      benefit: 47,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 12,
      benefit: 22,
    },
    {
      name: "Herbal Tea",
      expiresIn: 2,
      benefit: 13,
    },
    {
      name: "Fervex",
      expiresIn: 4,
      benefit: 50,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 11,
      benefit: 21,
    },
    {
      name: "Herbal Tea",
      expiresIn: 1,
      benefit: 14,
    },
    {
      name: "Fervex",
      expiresIn: 3,
      benefit: 50,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 10,
      benefit: 20,
    },
    {
      name: "Herbal Tea",
      expiresIn: 0,
      benefit: 15,
    },
    {
      name: "Fervex",
      expiresIn: 2,
      benefit: 50,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 9,
      benefit: 19,
    },
    {
      name: "Herbal Tea",
      expiresIn: -1,
      benefit: 17,
    },
    {
      name: "Fervex",
      expiresIn: 1,
      benefit: 50,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 8,
      benefit: 18,
    },
    {
      name: "Herbal Tea",
      expiresIn: -2,
      benefit: 19,
    },
    {
      name: "Fervex",
      expiresIn: 0,
      benefit: 50,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 7,
      benefit: 17,
    },
    {
      name: "Herbal Tea",
      expiresIn: -3,
      benefit: 21,
    },
    {
      name: "Fervex",
      expiresIn: -1,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 6,
      benefit: 16,
    },
    {
      name: "Herbal Tea",
      expiresIn: -4,
      benefit: 23,
    },
    {
      name: "Fervex",
      expiresIn: -2,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 5,
      benefit: 15,
    },
    {
      name: "Herbal Tea",
      expiresIn: -5,
      benefit: 25,
    },
    {
      name: "Fervex",
      expiresIn: -3,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 4,
      benefit: 14,
    },
    {
      name: "Herbal Tea",
      expiresIn: -6,
      benefit: 27,
    },
    {
      name: "Fervex",
      expiresIn: -4,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 3,
      benefit: 13,
    },
    {
      name: "Herbal Tea",
      expiresIn: -7,
      benefit: 29,
    },
    {
      name: "Fervex",
      expiresIn: -5,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 2,
      benefit: 12,
    },
    {
      name: "Herbal Tea",
      expiresIn: -8,
      benefit: 31,
    },
    {
      name: "Fervex",
      expiresIn: -6,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 1,
      benefit: 11,
    },
    {
      name: "Herbal Tea",
      expiresIn: -9,
      benefit: 33,
    },
    {
      name: "Fervex",
      expiresIn: -7,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: 0,
      benefit: 10,
    },
    {
      name: "Herbal Tea",
      expiresIn: -10,
      benefit: 35,
    },
    {
      name: "Fervex",
      expiresIn: -8,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -1,
      benefit: 8,
    },
    {
      name: "Herbal Tea",
      expiresIn: -11,
      benefit: 37,
    },
    {
      name: "Fervex",
      expiresIn: -9,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -2,
      benefit: 6,
    },
    {
      name: "Herbal Tea",
      expiresIn: -12,
      benefit: 39,
    },
    {
      name: "Fervex",
      expiresIn: -10,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -3,
      benefit: 4,
    },
    {
      name: "Herbal Tea",
      expiresIn: -13,
      benefit: 41,
    },
    {
      name: "Fervex",
      expiresIn: -11,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -4,
      benefit: 2,
    },
    {
      name: "Herbal Tea",
      expiresIn: -14,
      benefit: 43,
    },
    {
      name: "Fervex",
      expiresIn: -12,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -5,
      benefit: 0,
    },
    {
      name: "Herbal Tea",
      expiresIn: -15,
      benefit: 45,
    },
    {
      name: "Fervex",
      expiresIn: -13,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -6,
      benefit: 0,
    },
    {
      name: "Herbal Tea",
      expiresIn: -16,
      benefit: 47,
    },
    {
      name: "Fervex",
      expiresIn: -14,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -7,
      benefit: 0,
    },
    {
      name: "Herbal Tea",
      expiresIn: -17,
      benefit: 49,
    },
    {
      name: "Fervex",
      expiresIn: -15,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -8,
      benefit: 0,
    },
    {
      name: "Herbal Tea",
      expiresIn: -18,
      benefit: 50,
    },
    {
      name: "Fervex",
      expiresIn: -16,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -9,
      benefit: 0,
    },
    {
      name: "Herbal Tea",
      expiresIn: -19,
      benefit: 50,
    },
    {
      name: "Fervex",
      expiresIn: -17,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
  [
    {
      name: "Doliprane",
      expiresIn: -10,
      benefit: 0,
    },
    {
      name: "Herbal Tea",
      expiresIn: -20,
      benefit: 50,
    },
    {
      name: "Fervex",
      expiresIn: -18,
      benefit: 0,
    },
    {
      name: "Magic Pill",
      expiresIn: 15,
      benefit: 40,
    },
  ],
];

describe("Pharmacy E2E", () => {
  it("should give the same output as the original pre-refactor version", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 12, 35),
      new Drug("Magic Pill", 15, 40),
    ];
    const pharmacy = new Pharmacy(drugs);

    const output = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      output.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
    }

    expect(output).toStrictEqual(originalOutput);
  });
});
