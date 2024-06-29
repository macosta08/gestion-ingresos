/*
  Warnings:

  - You are about to drop the column `movimientoId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `movimientoId` on the `Session` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_movimientoId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_movimientoId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "movimientoId";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "movimientoId";
