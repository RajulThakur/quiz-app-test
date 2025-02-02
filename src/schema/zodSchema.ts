import {z} from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .email({message: 'Please enter a valid email address'})
    .refine(
      (email) =>
        /^[^@]+@(gmail\.com|icloud\.com|yahoo\.com|outlook\.com|hotmail\.com)$/i.test(email),
      {
        message:
          'Please use a valid email provider (gmail.com, icloud.com, yahoo.com, outlook.com, hotmail.com)',
      }
    ),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters long'})
    .max(30, {message: 'Password must be at most 30 characters long'}),
});

export const signUpSchema = z.object({
  email: z
    .string()
    .email({message: 'Please enter a valid email address'})
    .refine(
      (email) =>
        /^[^@]+@(gmail\.com|icloud\.com|yahoo\.com|outlook\.com|hotmail\.com)$/i.test(email),
      {
        message:
          'Please use a valid email provider (gmail.com, icloud.com, yahoo.com, outlook.com, hotmail.com)',
      }
    ),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters long'})
    .max(30, {message: 'Password must be at most 30 characters long'}),
  name: z
    .string()
    .min(3, {message: 'Name must be at least 3 characters long'})
    .max(30, {message: 'Name must be at most 30 characters long'}),
});
