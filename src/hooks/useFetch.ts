import { useEffect, useState } from "react";
import { api } from "../service/api";

export function useFetch<T = unknown>(url: string)  {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true)
  const [error, setIsError] = useState<Error | null>(null)

  useEffect(() => {
    api.get(url).then(response => {
      setData(response.data)
    })
    .catch(err => {
      setIsError(err)
    })
    .finally(() => {
      setIsFetching(false)
    })
  }, [])

  return {data, isFetching, error}

}
