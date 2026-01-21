/**
 * Pricing Logic for Consultation Services
 */

export const PRICING_CONFIG = {
  individual: {
    baseFee: 199, // NPR
    duration: 30, // minutes
  },
  small_business: {
    baseFee: 499, // NPR
    duration: 60, // minutes
  },
  large_business: {
    baseFee: 999, // NPR
    duration: 60, // minutes
  }
};

export const calculateConsultationFee = (type) => {
  if (type === 'individual') {
    return {
      fee: PRICING_CONFIG.individual.baseFee,
      total: PRICING_CONFIG.individual.baseFee,
      isEstimate: false
    };
  }

  if (type === 'small_business') {
    return {
      fee: PRICING_CONFIG.small_business.baseFee,
      total: PRICING_CONFIG.small_business.baseFee,
      isEstimate: false
    };
  }

  if (type === 'large_business') {
    return {
        fee: PRICING_CONFIG.large_business.baseFee,
        total: PRICING_CONFIG.large_business.baseFee,
        isEstimate: false
    };
  }
  
  return { fee: 0 };
};
