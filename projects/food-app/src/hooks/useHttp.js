import { useCallback, useState } from "react";

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const sendRequest = useCallback(async (url, config) => {
    try {
      const { method = "GET", headers = {}, body = null } = config;
      setIsLoading(true);
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: method !== "GET" && body ? JSON.stringify(body) : null,
      });

      const data =  await response.json();

      if (!response.ok) {
        const error = new Error(data?.message || "Request failed");
        error.status = response.status;
        throw error;
      }

      return data;
    } catch (error) {
      setErrors(error.message || "Something went wrong");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    errors,
    sendRequest,
  };
}
