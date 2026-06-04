/**
 * call fn()
 * → fn returns a promise
 * → while promise is pending: loading
 * → if promise resolves: success + data
 * → if promise rejects: error + error
 *
 * connect a promise lifecycle to React render state
 * */

import {useState, useEffect} from 'react';
export default function useQuery(fn, deps = []) {
  const [request, setRequest] = useState({
    status: 'loading',
  });

  useEffect(() => {
    setRequest({status: 'loading'});

    fn().then((data) => {
      setRequest({status: 'success', data});
    }).catch((error) => {
      setRequest({status: 'error', error});
    })
  }, [...deps]);
  return request;
}