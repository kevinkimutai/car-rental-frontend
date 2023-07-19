import pool from "@/config/dbConnect";

export const createRole = (data, callBack) => {
  pool.query(
    `INSERT INTO roles(role_name) 
                VALUES(?)`,
    [data],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
  );
};
