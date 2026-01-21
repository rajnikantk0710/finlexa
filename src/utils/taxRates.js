// Nepal Tax Rates for FY 2081/82 (2024/25)

export const TAX_SLABS = {
  individual: [
    { width: 500000, rate: 0.01, description: "First 500k (Social Security Tax)" },
    { width: 200000, rate: 0.10, description: "Next 200k" },
    { width: 300000, rate: 0.20, description: "Next 300k" },
    { width: 1000000, rate: 0.30, description: "Next 10L" },
    { width: 3000000, rate: 0.36, description: "Next 30L (30% + 20% Surcharge)" },
    { width: Infinity, rate: 0.39, description: "Above 50L (30% + 30% Surcharge)" },
  ],
  couple: [
    { width: 600000, rate: 0.01, description: "First 600k (Social Security Tax)" },
    { width: 200000, rate: 0.10, description: "Next 200k" },
    { width: 300000, rate: 0.20, description: "Next 300k" },
    { width: 900000, rate: 0.30, description: "Next 9L" },
    { width: 3000000, rate: 0.36, description: "Next 30L (30% + 20% Surcharge)" },
    { width: Infinity, rate: 0.39, description: "Above 50L (30% + 30% Surcharge)" },
  ],
};

// Rates for insurance deductions, etc. can be added here
export const DEDUCTIONS = {
    insuranceLimit: 40000, // Example limit (check recent) - usually 40k or similar
    // For now we will implement basic deductions
};
