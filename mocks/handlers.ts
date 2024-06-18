// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from "msw";
// eslint-disable-next-line import/no-extraneous-dependencies
// レスポンスデータ
import { resAcptData } from "./common/resForAcptData";
import { resMtgInfoData } from "./common/resForMtgInfoData";

export const handlers = [
  // 各リクエストに対してレスポンスを返す
  // get
  http.get("/mtg/member", () => {
    return HttpResponse.json(resMtgInfoData.getResponse());
  }),
  http.get("/sample", () => {
    return HttpResponse.json(resMtgInfoData.getResponse());
  }),

  // post
  http.post("/acpt", () => {
    return HttpResponse.json(resAcptData.getResponse());
  }),
];
