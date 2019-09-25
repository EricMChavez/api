/**
 * review model
 */
import { Schema } from 'mongoose';
import createModel from '../utils/db';

export default createModel(
  'reviews',
  new Schema(
    {
        name: String,
        jobTitle: String,
        reviewBody: String
    }
    { timestamps: true },
  ),
);
