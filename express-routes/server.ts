import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', req.method, req.path, new Date());
  app.get('/', (req, res) => {
    res.send("this is the '/' route handler");
  });
  app.get('/notes', (req, res) => {
    res.send("this is the '/notes' route handler. " + req.method + req.path);
  });
  app.post('/notes/:noteId', (req, res) => {
    const { noteId } = req.params;
    res.send('This is the noteId: ' + noteId);
  });
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
