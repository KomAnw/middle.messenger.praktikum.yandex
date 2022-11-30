import { ReadyStateStatuses, ResponseStatuses } from "src/api/types";

export const checkResponseStatus = (
  readyState: ReadyStateStatuses,
  status: ResponseStatuses
) =>
  readyState == ReadyStateStatuses.DONE && status === ResponseStatuses.ok
    ? "ok"
    : null;
