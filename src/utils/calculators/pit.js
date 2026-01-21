import { TAX_SLABS } from '../taxRates';

/**
 * Calculates Personal Income Tax for Nepal.
 * 
 * @param {number} income - Annual taxable income in NPR.
 * @param {string} type - 'individual' or 'couple'.
 * @param {Object} options - { contributingToSSF: boolean, isFemaleWorker: boolean }
 * @returns {Object} { totalTax, breakdown: [{ slab, rate, taxAmount }], netIncome }
 */
export const calculatePIT = (income, type = 'individual', options = {}) => {
  const { contributingToSSF = false, isFemaleWorker = false } = options;
  const slabs = TAX_SLABS[type];
  
  let remainingIncome = income;
  let totalTax = 0;
  const breakdown = [];
  
  for (let i = 0; i < slabs.length; i++) {
    const slab = slabs[i];
    
    // Determine how much income falls into this slab
    // For the last slab (Infinity), it catches all remaining
    const slabWidth = slab.width;
    const taxableAmount = Math.min(remainingIncome, slabWidth);
    
    if (taxableAmount <= 0) break;
    
    let taxRate = slab.rate;
    
    // If contributing to SSF, the first 1% tax is waived (Rate becomes 0)
    // The 1% slab is typically the first one.
    if (i === 0 && contributingToSSF) {
        taxRate = 0;
    }
    
    const taxAmount = taxableAmount * taxRate;
    
    breakdown.push({
      slab: slab.description,
      amount: taxableAmount,
      rate: taxRate,
      tax: taxAmount,
    });
    
    totalTax += taxAmount;
    remainingIncome -= taxableAmount;
  }
  
  // Apply Female Tax Rebate (10% of tax liability)
  // Note: Usually applies if income is from employment only. We assume this check is done or passed in.
  let rebate = 0;
  if (isFemaleWorker) {
      rebate = totalTax * 0.10;
      totalTax -= rebate;
  }
  
  // Ensure non-negative
  totalTax = Math.max(0, totalTax);
  
  return {
    totalTax,
    breakdown,
    rebate,
    netIncome: income - totalTax
  };
};
