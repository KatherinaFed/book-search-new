import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Preloader from '../Preloader/Preloader';

interface ErrorHandlerProps {
  isLoading: boolean;
  isFetching: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}

function ErrorHandler({ isLoading, isFetching, error }: ErrorHandlerProps) {
  if (isLoading && isFetching) {
    return <Preloader />;
  }

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
