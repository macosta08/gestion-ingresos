/*
  Warnings:

  - You are about to drop the column `cedula` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `HST_examenesRealizados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TMP_examenesRealizados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoleToUser` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `name` on the `Role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Enum_Concepto" AS ENUM ('Ingreso', 'Egreso');

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_B_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "movimientoId" TEXT;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "movimientoId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cedula",
ADD COLUMN     "roleId" TEXT,
ADD COLUMN     "telefono" TEXT;

-- DropTable
DROP TABLE "HST_examenesRealizados";

-- DropTable
DROP TABLE "TMP_examenesRealizados";

-- DropTable
DROP TABLE "_RoleToUser";

-- DropEnum
DROP TYPE "Enum_RoleName";

-- CreateTable
CREATE TABLE "Movimiento" (
    "id" TEXT NOT NULL,
    "monto" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT,
    "concepto" "Enum_Concepto" NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movimiento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_movimientoId_fkey" FOREIGN KEY ("movimientoId") REFERENCES "Movimiento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_movimientoId_fkey" FOREIGN KEY ("movimientoId") REFERENCES "Movimiento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimiento" ADD CONSTRAINT "Movimiento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
