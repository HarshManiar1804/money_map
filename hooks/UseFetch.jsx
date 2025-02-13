import React, { useState } from "react";
import { toast } from "sonner";

const UseFetch = (cb) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fn, setData };
};

export default UseFetch;
