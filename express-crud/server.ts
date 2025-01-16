import express from 'express';
import pg from 'pg';
import { ClientError } from './lib';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number; // A number between 0 and 100
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select * from grades;
  `;
    const result = await db.query(sql);
    const grades = result.rows;
    res.send(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'Non-integer id');
    }
    const sql = `
      select *
        from "grades"
      where "gradeId"=$1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'target grade does not exist in the database');
    }
    res.send(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'The inputted grade is invalid');
    }
    if (!Number.isInteger(+score) || !(score > 0 && score < 100)) {
      throw new ClientError(
        400,
        'The inputted score is not an integer 0 - 100'
      );
    }
    const sql = `
      insert into "grades" ("name","course","score")
        values($1,$2,$3)
      returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    res.json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      throw new ClientError(400, 'The inputted grade is invalid');
    }
    if (!Number.isInteger(+score) || !(score > 0 && score < 100)) {
      throw new ClientError(
        400,
        'The inputted score is not an integer 0 - 100'
      );
    }
    const sql = `
      update "grades"
        set "name"=$1, course=$2, score=$3
      where "gradeId"=$4
      returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, 'target grade does not exist in the database');
    }
    res.status(201).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'Non-integer id');
    }
    const sql = `
      delete from "grades"
      where "gradeId"=$1
      returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      throw new ClientError(404, 'target grade does not exist in the database');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
app.listen(8080, () => {
  console.log('Listening on port 8080');
});
