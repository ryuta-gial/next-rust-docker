import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>確認画面</h1>
      <p>名前</p>
      <p>年齢</p>
      <Link href="/">
        <button>ホームに戻る</button>
      </Link>
    </div>
  );
}
