const express = require('express');

// can be used for both front or back end
// for sending requests
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/api/send_message_to_server_b', (request, response) => {
  let messageObject = { message: 'Message from api-server-a' };

  if(request.body.message)
    messageObject.message = request.body.message;

  axios.post(
    'http://serverb:33221/api/add_text_to_message',
    messageObject,
    { headers: { 'Content-Type': 'application/json' } }
  )
   .then(responseObject => response.status(200).send(responseObject.data))
   .catch(err => console.log(err));
});

// listening on 44332 in container port
app.listen(44332, () => console.log('Server running on 44332'));
