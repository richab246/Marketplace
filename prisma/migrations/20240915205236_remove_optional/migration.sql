/*
  Warnings:

  - Made the column `link` on table `Model` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Model" ALTER COLUMN "link" SET NOT NULL;
