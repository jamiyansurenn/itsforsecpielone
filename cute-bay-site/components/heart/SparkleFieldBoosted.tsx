"use client";

import { SparkleField } from "@/components/SparkleField";
import { useHeartCollection } from "@/components/heart/HeartCollectionContext";

export function SparkleFieldBoosted() {
  const { count, collected } = useHeartCollection();
  const boost = count >= 4 && !collected.has(5);
  return <SparkleField boost={boost} />;
}
