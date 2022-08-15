-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Jeans',
    "image" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "numReviews" INTEGER NOT NULL,
    "countInStock" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Product" ("brand", "category", "countInStock", "description", "id", "image", "name", "numReviews", "price", "rating", "slug") SELECT "brand", "category", "countInStock", "description", "id", "image", "name", "numReviews", "price", "rating", "slug" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
