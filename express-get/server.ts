import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/countries', async (req, res, next) => {
  try {
    const sql = `
      select "co"."countryId", "co"."name", count(*) as "cities"
      from "countries" as "co"
      join "cities" as "c" using ("countryId")
      group by "co"."countryId", "co"."name";
    `;
    const result = await db.query(sql);
    const countries = result.rows;
    res.json(countries);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const { cityId } = req.params;
    const sql = `
      select "c"."name","cityId", "co"."name" as "country"
      from "cities" as "c"
      join "countries" as "co" using("countryId")
      where "cityId" =$1
    `;
    const params = [cityId];
    const result = await db.query(sql, params);
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
