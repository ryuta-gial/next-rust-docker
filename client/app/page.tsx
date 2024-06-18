"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 名前と年齢が入力されているかどうかをチェックする条件
  const isFormValid = name.trim() !== "" && age.trim() !== "";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="border-2 border-gray-300 p-4 m-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold underline mb-4">機能コード学習</h1>
        <div className="w-full">
          <label>名前: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
        <div className="w-full">
          <label>年齢: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full"
          />
        </div>
        <Link
          href={
            isFormValid ? { pathname: "/confirm", query: { name, age } } : {}
          }
        >
          <button
            type="button"
            disabled={!isFormValid}
            className={`border-2 border-gray-300 p-2 m-2 w-72 h-12 ${
              isFormValid
                ? "bg-blue-500 text-white hover:bg-blue-700"
                : "bg-gray-500 text-gray-400"
            }`}
          >
            確認
          </button>
        </Link>
        <Link href={{ pathname: "/static" }}>
          <button
            type="button"
            className="border-2 border-gray-300 p-2 m-2 w-72 h-12 bg-blue-500 text-white hover:bg-blue-700"
          >
            静的ページポケモンAPI
          </button>
        </Link>
        <Link href={{ pathname: "/cal" }}>
          <button
            type="button"
            className="border-2 border-gray-300 p-2 m-2 w-72 h-12 bg-blue-500 text-white hover:bg-blue-700"
          >
            cal表示
          </button>
        </Link>
      </form>
    </div>
  );
}
