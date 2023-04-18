import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Configuration, OpenAIApi } from "openai";
import bodyParser from 'body-parser';



const configuration = new Configuration({
  organization: "org-8kaL90APgyzdjbMYcLBw9wpc",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/selection', (req, res) => {
  res.sendFile(__dirname + '/selection.html');
});

function generateChatResponse(p) {
  return openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: p }],
  }).then(res => {
    return res.data.choices[0].message.content;
  });
}

app.post('/response', (req, res) => {
  const stringData = req.body;
  const p = stringData.str;
  console.log(p);
  const chatPromise = generateChatResponse(p);
  chatPromise.then(output => {
    console.log(output);
    res.send(output);
  });


});

app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000');
});
app.use(express.static(__dirname));

