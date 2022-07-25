import { FC } from 'react';
import { CgSpinner } from 'react-icons/cg';
import './spinner.css';


export const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <CgSpinner className="spinner" />
    </div>
  );
};
