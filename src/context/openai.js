import axios from 'axios';

const handleListEngines = async (text) => {
  const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
    prompt: `Extract the city from the text which could also have an airport code:\n
    \nText: I want to have a beer in Minneapolis ${text}\nCity: Minneapolis\n
    \nText: I am head toward Tampa, FL ${text}\nCity: Tampa \n
    \nText: Beer at HNL ${text}\n City: Honolulu\n
    \nText: Need a beer in MSP or msp ${text}\n City: Minneapolis\n
    \nText: Flying to JAX or jax or Jax ${text}\n City: Jacksonville\n
    \nText: I want to have a beer in ${text}\n City: `,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
    }
  });
  return response.data;
};

export default handleListEngines;
