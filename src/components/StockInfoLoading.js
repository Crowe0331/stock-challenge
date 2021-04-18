import React from 'react';

function StockInfoLoading(Component) {
  return function StockInfoLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Fetching stock information. May take some time to compile.
      </p>
    );
  };
}
export default StockInfoLoading;