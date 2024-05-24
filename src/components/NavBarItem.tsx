"use client"

import Link from 'next/link'
import React from 'react'

import { useSearchParams } from 'next/navigation'

export default function NavBarItem({
  title,
  param,
}: {
  title: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-500 hover:font-bold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
