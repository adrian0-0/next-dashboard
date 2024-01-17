-- CreateTable
CREATE TABLE "professores" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "programa" TEXT NOT NULL,
    "orientadorTecnico" TEXT NOT NULL,
    "monitor" TEXT NOT NULL,
    "professorId" INTEGER,

    CONSTRAINT "empresas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professores_email_key" ON "professores"("email");

-- AddForeignKey
ALTER TABLE "empresas" ADD CONSTRAINT "empresas_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
