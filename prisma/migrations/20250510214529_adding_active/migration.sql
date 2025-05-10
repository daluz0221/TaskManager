-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "SubTarea" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
