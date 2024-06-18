// ログイン取得情報
export const mtgInfoData = {
  body: {
    customerList: [
      {
        contractNamKjMei: "〇子",
        contractNamKjSei: "〇〇〇",
        contractNamKnMei: "ＺイＺ",
        contractNamKnSei: "ＺＺ゛ＺＺワ",
      },
      {
        contractNamKjMei: "元",
        contractNamKjSei: "ＯＯ",
        contractNamKnMei: "ハシハハ",
        contractNamKnSei: "ハハウ",
      },
    ],
    mailAddress: "mtg09@com",
    mtgTelNo: "09011140905",
  },
  code: "0",
  error: null,
};

class MtgInfoMock {
  /** レスポンスデータ */
  data: object = mtgInfoData;

  /** APIのモックレスポンスを返却 */
  getResponse() {
    const returnData = this.data;
    this.data = mtgInfoData;
    return returnData;
  }
}
export const resMtgInfoData = new MtgInfoMock();
