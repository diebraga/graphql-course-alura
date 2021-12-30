-- CreateTable
CREATE TABLE "Enrollment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "Enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ClassToEnrollment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Class" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Enrollment" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_key" ON "Enrollment"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToEnrollment_AB_unique" ON "_ClassToEnrollment"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToEnrollment_B_index" ON "_ClassToEnrollment"("B");
