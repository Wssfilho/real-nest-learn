/*
  Warnings:

  - Added the required column `missionId` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hero" ADD COLUMN     "missionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
