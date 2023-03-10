import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} className="block mb-1 text-lg font-medium text-gray-900">{label}</label>
      <input
        className={`border border-gray-300 text-gray-900 sm:text-sm rounded-lg shadow-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2 ${meta.touched && meta.error && ' border-red-500'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="block text-red-600 mt-2" />
    </div>
  )
}