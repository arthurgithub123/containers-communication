const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/add_text_to_message', (request, response) => {
  let messageObject = request.body;
  messageObject.message += ' plus api-server-b message';

  return response.status(200).json(messageObject);
});

// listening on 44332 in container port
app.listen(33221, () => console.log('Server running on 33221'));
