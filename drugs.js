export const defaultDrug = {
  applyExpirationChange: (expiresIn) => expiresIn - 1,
  applyBenefitChange: (benefit, expiresIn) => {
    // Once the expiration date has passed, Benefit degrades twice as fast.
    if (expiresIn <= 0) return benefit - 2;

    // Benefits decreases at the end of each day
    return benefit - 1;
  },
};

export const drugs = {
  "Magic Pill": {
    // "Magic Pill" never expires nor decreases in Benefit.
    applyExpirationChange: (expiresIn) => expiresIn,
    applyBenefitChange: (benefit) => benefit,
  },

  "Herbal Tea": {
    applyExpirationChange: defaultDrug.applyExpirationChange,
    applyBenefitChange: (benefit, expiresIn) => {
      // Benefit increases twice as fast after the expiration date.
      if (expiresIn <= 0) return benefit + 2;

      // "Herbal Tea" increases in Benefit the older it gets.
      return benefit + 1;
    },
  },

  Fervex: {
    applyExpirationChange: defaultDrug.applyExpirationChange,
    applyBenefitChange: (benefit, expiresIn) => {
      // Benefit drops to 0 after the expiration date
      if (expiresIn <= 0) return 0;

      // Benefit increases by 3 when there are 10 days or less
      if (expiresIn <= 5) return benefit + 3;

      // Benefit increases by 2 when there are 10 days left or less
      if (expiresIn <= 10) return benefit + 2;

      // Fervex increases in Benefit as its expiration date approaches
      return benefit + 1;
    },
  },

  Dafalgan: {
    applyExpirationChange: defaultDrug.applyExpirationChange,
    applyBenefitChange: (benefit) => {
      // Dafalgan degrades in Benefit twice as fast as normal drugs
      return benefit - 2;
    },
  },
};
