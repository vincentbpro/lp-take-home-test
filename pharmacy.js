import { defaultDrug, drugs } from "./drugs";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map((drug) => {
      // Find the configuration for the current drug
      // Use the default drug configuration as a fallback
      const drugRules = drugs[drug.name] || defaultDrug;

      // Update drug benefit
      drug.benefit = drugRules.applyBenefitChange(drug.benefit, drug.expiresIn);

      // The benefit can't be negative
      if (drug.benefit < 0) drug.benefit = 0;

      // The benefit can't be greater than 50
      if (drug.benefit > 50) drug.benefit = 50;

      // Update drug expiration date
      drug.expiresIn = drugRules.applyExpirationChange(drug.expiresIn);

      return drug;
    });

    return this.drugs;
  }
}
