import axios from 'axios';

const handleListEngines = async (text) => {
  const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
    prompt: `Extract the city from the text:\n\nText: I want to have a beer in Minneapolis "${text}"\nCity: Minneapolis \nText: I want to have a beer in"${text}"\nCity: `,
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



// apiKey: "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"