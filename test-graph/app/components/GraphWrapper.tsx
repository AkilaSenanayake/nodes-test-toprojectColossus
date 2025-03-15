'use client';

import dynamic from 'next/dynamic';

const ForceDirectedTree = dynamic(
  () => import('./ForceDirectedTree'),
  { ssr: false }
);

export default function GraphWrapper() {
  return <ForceDirectedTree />;
} 