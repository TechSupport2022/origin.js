import React from 'react'
import Spinner from './Spinner'

const LoadingModal = ({ loading }: { loading?: boolean }) => {
   return (
      <div className='LoadingModalWrapper'>
         <div className='modal'>
            <Spinner loading />
         </div>
      </div>
   )
}

export default LoadingModal
