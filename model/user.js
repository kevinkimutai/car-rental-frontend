import pool from "../config/dbConnect";

export const getAllUsers = (data, callBack) => {
  pool.query(
    `insert into registration(firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
    [
      data.first_name,
      data.last_name,
      data.gender,
      data.email,
      data.password,
      data.number,
    ],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};

export const getUserByEmail = (email, callBack) => {
  pool.query(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
};

export const getUserById = (userId, callBack) => {
  pool.query(
    `SELECT * FROM users WHERE user_id = ?`,
    [userId],
    (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
};

export const createUser = (data, callBack) => {
  pool.query(
    `INSERT INTO users(fname, lname, email, password,phone_number,role_id) 
                values(?,?,?,?,?,?)`,
    [
      data.fname,
      data.lname,
      data.email,
      data.password,
      data.phone_number,
      data.role_id,
    ],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};

export const editUser = (data, callBack) => {
  pool.query(
    `insert into registration(firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
    [
      data.first_name,
      data.last_name,
      data.gender,
      data.email,
      data.password,
      data.number,
    ],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};
export const updateUser = (data, callBack) => {
  pool.query(
    `insert into registration(firstName, lastName, gender, email, password, number) 
                values(?,?,?,?,?,?)`,
    [
      data.first_name,
      data.last_name,
      data.gender,
      data.email,
      data.password,
      data.number,
    ],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};
