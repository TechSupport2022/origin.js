'use client'

import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader'; // Example using react-spinners library

interface SpinnerProps {
  loading: boolean;
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
   return (
      <div className="flex justify-center items-center spinner-container">
        <ClipLoader color={'#123abc'} loading={loading} size={50} />
      </div>
    );
}

export default Spinner
