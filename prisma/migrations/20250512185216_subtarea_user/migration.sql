/*
  Warnings:

  - Added the required column `usuarioId` to the `SubTarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubTarea" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SubTarea" ADD CONSTRAINT "SubTarea_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
