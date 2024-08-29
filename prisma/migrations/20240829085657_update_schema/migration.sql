/*
  Warnings:

  - You are about to drop the `_ModelToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ModelToUser" DROP CONSTRAINT "_ModelToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ModelToUser" DROP CONSTRAINT "_ModelToUser_B_fkey";

-- DropTable
DROP TABLE "_ModelToUser";
