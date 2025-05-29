import { connectSequelize } from "../config/database";

const sequelize = connectSequelize();

sequelize
  .authenticate()
  .then(() => {
    // import("./association").then(() => {
    console.log("DB Connected");
    // })
    // .catch((err) => {
    //   console.log(err);
    //   process.exit(1);
    // })
  })
  .catch((err: any) => {
    console.log(err);
    process.exit(1);
  });

export { sequelize };
