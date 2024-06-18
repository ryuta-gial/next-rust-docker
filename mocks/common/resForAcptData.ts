// 通常レスポンスデータ
export const acptkData = {
  data: {
    commonItems: {
      acceptanceIndex: "1234567890",
    },
  },
};

class ResponseAcptMock {
  /** レスポンスデータ */
  data: object = acptkData;

  /** APIのモックレスポンスを返却 */
  getResponse() {
    const returnData = this.data;
    this.data = acptkData;
    return returnData;
  }
}
export const resAcptData = new ResponseAcptMock();
