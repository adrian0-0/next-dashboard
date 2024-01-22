/*
  Warnings:

  - You are about to drop the column `companyID` on the `ProgramHours` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ProgramHours_companyID_key";

-- AlterTable
ALTER TABLE "ProgramHours" DROP COLUMN "companyID";
