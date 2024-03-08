import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface ErrorHandlerProps {
  error: FetchBaseQueryError | SerializedError | undefined;
}

function ErrorHandler({ error }: ErrorHandlerProps) {
  if (error) {
    if ('status' in error) {
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }

  return null;
}

export default ErrorHandler;
