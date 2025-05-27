
require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const equations = JSON.parse(fs.readFileSync('equations.json', 'utf-8'));

app.post('/api/solve', async (req, res) => {
  const { input } = req.body;
  try {
    const prompt = `Given the following known variables and the desired unknown, suggest relevant physics equations to solve the problem:\n\n${input}\n\nEquations:`;
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });
    res.json({ result: completion.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: 'Error processing request.' });
  }
});

app.get('/api/equations', (req, res) => {
  res.json(equations);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
