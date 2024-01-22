/*
  Warnings:

  - A unique constraint covering the columns `[programHoursId]` on the table `empresas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `programHoursId` to the `empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProgramHours" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProgramHours_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "programHoursId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "empresas_programHoursId_key" ON "empresas"("programHoursId");
