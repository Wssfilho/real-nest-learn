/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[heroName]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `power` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_heroName_key" ON "Hero"("heroName");

-- CreateIndex
CREATE UNIQUE INDEX "power_name_key" ON "power"("name");
