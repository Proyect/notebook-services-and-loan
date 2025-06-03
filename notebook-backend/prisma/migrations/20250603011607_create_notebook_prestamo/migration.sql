-- CreateTable
CREATE TABLE "Notebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "numeroSerie" TEXT NOT NULL,
    "idHardware" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "observaciones" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Prestamo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "notebookId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "fechaPrestamo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaDevolucion" DATETIME,
    "observaciones" TEXT,
    CONSTRAINT "Prestamo_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_numeroSerie_key" ON "Notebook"("numeroSerie");

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_idHardware_key" ON "Notebook"("idHardware");
