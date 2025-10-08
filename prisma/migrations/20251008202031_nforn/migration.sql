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

-- AddForeignKey
ALTER TABLE "heroPower" ADD CONSTRAINT "heroPower_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "heroPower" ADD CONSTRAINT "heroPower_powerId_fkey" FOREIGN KEY ("powerId") REFERENCES "power"("id") ON DELETE CASCADE ON UPDATE CASCADE;
