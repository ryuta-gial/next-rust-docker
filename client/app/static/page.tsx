"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// ポケモンのデータ型定義
type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export default function Page() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetchPokemonData().then(setPokemon);
  }, []); // コンポーネントがマウントされた時にデータを一度だけフェッチします

  // 新しいポケモンデータをフェッチする関数
  const handleFetchNewPokemon = async () => {
    const newPokemon = await fetchPokemonData();
    setPokemon(newPokemon);
  };

  if (!pokemon) return <div>Loading...</div>; // データがまだない場合はローディング表示

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-gray-300 p-4 m-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold underline mb-4">
          {pokemon.name.toUpperCase()}
        </h1>
        <p className="mb-4">#{pokemon.id}</p>
        <img src={pokemon.image} alt={pokemon.name} className="mb-4" />

        <button
          onClick={handleFetchNewPokemon}
          className="border-2 border-gray-300 p-2 m-2 w-72 h-12 bg-blue-500 text-white hover:bg-blue-700"
        >
          新しいポケモンを見る
        </button>
        <Link href="/">
          <button className="border-2 border-gray-300 p-2 m-2 w-72 h-12 bg-blue-500 text-white hover:bg-blue-700">
            ホームに戻る
          </button>
        </Link>
      </div>
    </div>
  );
}

// PokeAPIからランダムなポケモンのデータをフェッチする関数
async function fetchPokemonData() {
  const randomId = Math.floor(Math.random() * 898) + 1;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await res.json();

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
  };

  return pokemon;
}
