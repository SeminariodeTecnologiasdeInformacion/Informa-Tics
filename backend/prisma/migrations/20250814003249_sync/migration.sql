-- AlterTable
ALTER TABLE "public"."Orden" ALTER COLUMN "codigo" SET DEFAULT upper(substr(md5(random()::text),1,5));

-- DropEnum
DROP TYPE "public"."OrdenItemEstado";

-- DropEnum
DROP TYPE "public"."OrdenItemTipo";
