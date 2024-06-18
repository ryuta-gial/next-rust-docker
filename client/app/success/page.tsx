import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>完了画面</h1>
      <p>データの送信が完了しました。</p>
      <Link href="/">
        <button className="border-2 border-gray-300 p-2 m-2">
          ホームに戻る
        </button>
      </Link>
    </div>
  );
}
