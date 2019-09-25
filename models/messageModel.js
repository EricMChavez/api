/**
 * message model
 */
import { Schema } from 'mongoose';
import createModel from '../utils/db';

export default createModel(
  'messages',
  new Schema(
    {
        name: String,
        email: String,
        messageBody: String
    },
    { timestamps: true },
  ),
);
