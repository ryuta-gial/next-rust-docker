"use client";

import { useSearchParams, useRouter } from "next/navigation";

import Link from "next/link";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URLクエリからnameとageを取得し、型を確認
  const name =
    typeof searchParams.get("name") === "string"
      ? searchParams.get("name")
      : "";
  const age =
    typeof searchParams.get("age") === "string" ? searchParams.get("age") : "";

  const handleSubmit = async () => {
    try {
      // router.queryから取得したageを整数に変換
      if (!age) return;
      const ageInt = parseInt(age, 10);
      const response = await fetch("http://127.0.0.1:8080/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age: ageInt }),
      });

      if (response.ok) {
        // レスポンスが成功した場合、成功ページに遷移
        router.push("/success");
      } else {
        // エラーハンドリング
        console.error("サーバーエラー:", response.statusText);
      }
    } catch (error) {
      // ネットワークエラーやリクエストの失敗をキャッチ
      console.error("リクエストエラー:", error);
    }
  };

  return (
    <div>
      <h1>確認画面</h1>
      <p className="border-2 border-gray-300 p-4 m-4">名前: {name}</p>
      <p className="border-2 border-gray-300 p-4 m-4">年齢: {age}</p>
      <button
        className="border-2 border-gray-300 p-2 m-2"
        onClick={handleSubmit}
      >
        送信
      </button>
      <Link href="/">
        <button className="border-2 border-gray-300 p-2 m-2" type="button">
          戻る
        </button>
      </Link>
    </div>
  );
}
