import axios from 'axios';
import { convertToCountry } from 'features/ConvertToCoutry';

export const loadOptions = async (inputText, callback) => {
  await axios.get('https://api.exchangeratesapi.io/latest').then((res) => {
    if (inputText === '') {
      callback(
        Object.entries(res.data.rates).map((e) => ({ value: e[1], label: convertToCountry(e[0]) })),
      );
    } else {
      callback(
        Object.entries(res.data.rates).map((e) => ({ value: e[1], label: convertToCountry(e[0]) })),
      );
    }
  });
};
