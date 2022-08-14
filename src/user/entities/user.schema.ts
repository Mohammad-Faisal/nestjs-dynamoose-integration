import * as dynamoose from 'dynamoose';

export const UserSchema = new dynamoose.Schema(
  {
    Id: {
      type: Number,
      hashKey: true,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'CreateDate',
      updatedAt: 'UpdateDate',
    },
  },
);
