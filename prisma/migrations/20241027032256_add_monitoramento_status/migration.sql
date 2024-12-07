-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('SUCCESS', 'ERROR');

-- CreateTable
CREATE TABLE "MonitoramentoStatus" (
    "ID" SERIAL NOT NULL,
    "monitorId" INTEGER NOT NULL,
    "status" "StatusEnum" NOT NULL,

    CONSTRAINT "MonitoramentoStatus_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonitoramentoStatus_monitorId_status_key" ON "MonitoramentoStatus"("monitorId", "status");

-- AddForeignKey
ALTER TABLE "MonitoramentoStatus" ADD CONSTRAINT "MonitoramentoStatus_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitors"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
