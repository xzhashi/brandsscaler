
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg relative my-4 shadow-soft" role="alert">
      <strong className="font-bold">Oops! </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default ErrorMessage;