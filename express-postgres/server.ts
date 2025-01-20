import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: { rejectUnauthorized: false },
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select "title", "filmId", "replacementCost" from "films" order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    console.log(result.rows);
    const films = result.rows;
    res.send(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number.isInteger(+'filmId')) {
      throw new ClientError(400, `Non-integer cityId: ${filmId}`);
    }
    const sql = `
      select "title", "filmId"
        from "films"
        where "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  console.log('hit put endpoint');
  try {
    const filmId = req.params.filmId;
    const title = req.query.title;
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, 'title is required');
    }
    const sql = `
      update "films"
      set "title"=$1
      where "filmId"=$2
      returning *;
      `;
    const params = [title, filmId];
    const result = await db.query(sql, params);
    console.log(result.rows);
    res.send('success');
  } catch (err) {
    next(err);
  }
});
