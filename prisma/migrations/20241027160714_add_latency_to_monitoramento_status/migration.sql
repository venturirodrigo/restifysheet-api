/*
  Warnings:

  - Added the required column `latencyMs` to the `MonitoramentoStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MonitoramentoStatus" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "latencyMs" DOUBLE PRECISION NOT NULL;
