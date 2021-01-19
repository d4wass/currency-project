export const convertToCountry = (shortcut) => {
  switch (shortcut) {
    case 'PLN':
      return 'PLN - Polish Zloty';
    case 'CAD':
      return 'CAD - Canadian Dollar';
    case 'HKD':
      return 'HKD - Hong kong Dollar';
    case 'ISK':
      return 'ISK - Icelandic Krona';
    case 'PHP':
      return 'PHP - Philippine Peso';
    case 'DKK':
      return 'DKK - Danish Krone';
    case 'HUF':
      return 'HUF - Hungarian Forint';
    case 'CZK':
      return 'CZK - Czech Koruna';
    case 'AUD':
      return 'AUD - Australian Dollar';
    case 'RON':
      return 'RON - Romanian Leu';
    case 'SEK':
      return 'SEK - Swedish Krona';
    case 'IDR':
      return 'IDR - Indonesian Rupiah';
    case 'INR':
      return 'INR - Indian Rupee';
    case 'BRL':
      return 'BRL - Brazilian Real';
    case 'RUB':
      return 'RUB - Russian Ruble';
    case 'HRK':
      return 'HRK - Croatian Kuna';
    case 'JPY':
      return 'JPY - Japanese Yen';
    case 'THB':
      return 'THB - Thai Bath';
    case 'CHF':
      return 'CHF - Swiss Franc';
    case 'SGD':
      return 'SGD - Singapore Dollar';
    case 'BGN':
      return 'BGN - Bulgarian Lev';
    case 'TRY':
      return 'TRY - Turkish Lira';
    case 'CNY':
      return 'CNY - Chinese Yuan';
    case 'NOK':
      return 'NOK - Norwegian Krone';
    case 'NZD':
      return 'NZD - New Zealand Dollar';
    case 'ZAR':
      return 'ZAR - South African Rand';
    case 'USD':
      return 'USD - US Dollar';
    case 'MXN':
      return 'MXN - Mexican Peso';
    case 'ILS':
      return 'ILS - Israeli Shekel';
    case 'GBP':
      return 'GBP - British Pound';
    case 'KRW':
      return 'KRW - South Korean Won';
    case 'MYR':
      return 'MYR - Malaysian Ringgit';
    default:
      return shortcut;
  }
};
