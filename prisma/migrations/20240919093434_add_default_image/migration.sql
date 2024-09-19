/*
  Warnings:

  - Made the column `image` on table `Model` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Model" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT 'https://afw-live.s3.amazonaws.com/model/model_198/Canva_Image_Models_1.png?w=384&q=75';
