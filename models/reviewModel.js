/**
 * review model
 */
import { Schema } from 'mongoose';
import createModel from './createModel';

export default createModel(
  'reviews',
  new Schema(
    {
        name: String,
        jobTitle: String,
        reviewBody: String
    },
    { timestamps: true },
  ),
);
