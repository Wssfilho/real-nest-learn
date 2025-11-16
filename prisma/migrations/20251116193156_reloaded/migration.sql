-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "civilName" VARCHAR(100) NOT NULL,
    "heroName" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "team" VARCHAR(100),
    "countryId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "power" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "heroPower" (
    "heroId" INTEGER NOT NULL,
    "powerId" INTEGER NOT NULL,

    CONSTRAINT "heroPower_pkey" PRIMARY KEY ("heroId","powerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Hero_heroName_key" ON "Hero"("heroName");

-- CreateIndex
CREATE UNIQUE INDEX "power_name_key" ON "power"("name");

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heroPower" ADD CONSTRAINT "heroPower_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heroPower" ADD CONSTRAINT "heroPower_powerId_fkey" FOREIGN KEY ("powerId") REFERENCES "power"("id") ON DELETE CASCADE ON UPDATE CASCADE;
