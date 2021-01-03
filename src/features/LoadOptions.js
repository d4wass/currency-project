import axios from 'axios';

export const loadOptions = async (inputText, callback) => {
  await axios.get('https://api.exchangeratesapi.io/latest').then((res) => {
    if (inputText === '') {
      callback(Object.entries(res.data.rates).map((e) => ({ value: e[1], label: e[0] })));
    } else {
      callback(Object.entries(res.data.rates).map((e) => ({ value: e[1], label: e[0] })));
    }
  });
};
