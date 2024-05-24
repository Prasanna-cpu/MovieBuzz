"use client"

import { useEffect } from 'react'
import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong , please try again</h1>
      <button onClick={() => reset()} className="hover:text-amber-600">
        Try Again
      </button>
    </div>
  );
}
