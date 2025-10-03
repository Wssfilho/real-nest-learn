-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "civilName" VARCHAR(100) NOT NULL,
    "heroName" VARCHAR(100) NOT NULL,
    "age" INTEGER NOT NULL,
    "team" VARCHAR(100),

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
