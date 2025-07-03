import { Schema, model, Document, Types } from 'mongoose';

export interface IExpense extends Document {
  user: Types.ObjectId;
  amount: number;
  category: string;
  description?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ExpenseSchema = new Schema<IExpense>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    enum: ['Food', 'Transport', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Education', 'Salary', 'Investment', 'Other'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Expense = model<IExpense>('Expense', ExpenseSchema);
export default Expense;

