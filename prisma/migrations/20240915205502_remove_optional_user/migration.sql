/*
  Warnings:

  - Made the column `userId` on table `Model` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_userId_fkey";

-- AlterTable
ALTER TABLE "Model" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
