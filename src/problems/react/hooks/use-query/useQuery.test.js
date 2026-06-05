import {describe, expect, it} from "vitest";
import {renderHook, waitFor} from "@testing-library/react";
import useQuery from "./useQuery";

describe("useQuery", () => {
  it('Should return loading initially, then success', async () => {
    const callback = () => Promise.resolve(['hello', 'world']);

    const { result } = renderHook(() => useQuery(callback, []));
    expect(result.current).toEqual({status: 'loading'});

    await waitFor(() => expect(result.current).toEqual({status: 'loading'}));
  })
})