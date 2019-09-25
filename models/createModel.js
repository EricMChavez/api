import { model } from 'mongoose';
const createModel = (name, schema) => {
  let mongooseModel = null;
  try {
    mongooseModel = model(name);
  } catch (error) {
    mongooseModel = model(name, schema);
  }
  return mongooseModel;
};
export default createModel;
