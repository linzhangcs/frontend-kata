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
    let isStale = false;
    Promise.resolve().then(() => {
      if (isStale) return;
      setRequest({status: 'loading'});
      return fn();
    }).then((data) => {
      if (isStale) return;
      setRequest({status: 'success', data});
    }).catch((error) => {
      if (isStale) return;
      setRequest({status: 'error', error});
    })
    return()=>{
      isStale = true;
    }
  }, deps);
  return request;
}