import {describe, expect, it, vi} from "vitest";
import {renderHook, waitFor} from "@testing-library/react";
import useQuery from "./useQuery";

describe("useQuery", () => {
  it("Should return loading initially, then success", async () => {
    const callback = () => Promise.resolve(['hello', 'world']);

    const { result } = renderHook(() => useQuery(callback, []));
    expect(result.current).toEqual({status: 'loading'});

    await waitFor(() => expect(result.current).toEqual({status: 'loading'}));
  })

  it("Should return loading initially, then rejection", async() => {
    const error = new Error("Request failed");
    const callback = () => Promise.reject(error);

    const {result} = renderHook(() => useQuery(callback, []));
    expect(result.current).toEqual({status: 'loading'});

    await waitFor(() => expect(result.current).toEqual({status: 'error', error}));
  })

  it("Should call the query function", async() => {
    const callback = vi.fn(() => Promise.resolve("data"));

    renderHook(() => useQuery(callback, []));
    await waitFor(() => {
     expect(callback).toHaveBeenCalledTimes(1);
    })
  })

  it("Should rerun the query function after dep change", async() => {
    const callback = vi.fn((id) => Promise.resolve(`data for user ${id}`));

    const {result, rerender} = renderHook(({id}) => useQuery(() => callback(id), [id]), {
      initialProps: {id: 1}
    });

    await waitFor(() => {
      expect(result.current).toEqual({status: "success", data: "data for user 1"});
    })

    // update the dep
    rerender({id: 2});

    await waitFor(() => {
      expect(result.current).toEqual({status: "success", data: "data for user 2"});
    })

  })
})