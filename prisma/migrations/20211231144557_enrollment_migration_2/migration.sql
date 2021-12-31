/*
  Warnings:

  - You are about to drop the `_ClassToEnrollment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classId` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Class_teacherId_key";

-- DropIndex
DROP INDEX "_ClassToEnrollment_B_index";

-- DropIndex
DROP INDEX "_ClassToEnrollment_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ClassToEnrollment";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Enrollment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    CONSTRAINT "Enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Enrollment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Enrollment" ("id", "studentId") SELECT "id", "studentId" FROM "Enrollment";
DROP TABLE "Enrollment";
ALTER TABLE "new_Enrollment" RENAME TO "Enrollment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
