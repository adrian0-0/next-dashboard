/*
  Warnings:

  - Made the column `email` on table `professores` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "professores" ALTER COLUMN "email" SET NOT NULL;
