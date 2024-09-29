const axios = require('axios');

exports.generateResponse = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await axios.post('https://api-inference.huggingface.co/models/gpt2', {
      inputs: message
    }, {
      headers: { 'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}` }
    });

    res.json({ reply: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};