-- CreateTable
CREATE TABLE "clothes" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT,
    "bar_code" TEXT NOT NULL,
    "brandId" INTEGER NOT NULL,

    CONSTRAINT "clothes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clothes_bar_code_key" ON "clothes"("bar_code");

-- AddForeignKey
ALTER TABLE "clothes" ADD CONSTRAINT "clothes_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
