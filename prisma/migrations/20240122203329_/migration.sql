/*
  Warnings:

  - The primary key for the `ProgramHours` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProgramHours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProgramHours" DROP CONSTRAINT "ProgramHours_pkey",
DROP COLUMN "id";
