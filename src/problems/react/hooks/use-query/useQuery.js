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
  const [requestStatus, setRequestStatus] = useState({
    status: 'loading',
  });

  useEffect(() => {
    let isStale = false;
    Promise.resolve().then(() => {
      if (isStale) return;
      setRequestStatus({status: 'loading'});
      return fn();
    }).then((data) => {
      if (isStale) return;
      setRequestStatus({status: 'success', data});
    }).catch((error) => {
      if (isStale) return;
      setRequestStatus({status: 'error', error});
    })
    return()=>{
      isStale = true;
    }
  }, deps);
  return requestStatus;
}