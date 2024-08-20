-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "billing_address" JSONB,
    "billing_customer_id" TEXT,
    "features" JSONB,
    "first_name" TEXT,
    "form_count" INTEGER,
    "full_name" TEXT,
    "kind" TEXT,
    "last_name" TEXT,
    "plan_id" TEXT,
    "plan_name" TEXT,
    "registered_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT,
    "language" TEXT,
    "timezone" TEXT,
    "title" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'created',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "newsletters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_subscribersToNewsletters" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "newsletters_id_idx" ON "newsletters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_subscribersToNewsletters_AB_unique" ON "_subscribersToNewsletters"("A", "B");

-- CreateIndex
CREATE INDEX "_subscribersToNewsletters_B_index" ON "_subscribersToNewsletters"("B");

-- AddForeignKey
ALTER TABLE "_subscribersToNewsletters" ADD CONSTRAINT "_subscribersToNewsletters_A_fkey" FOREIGN KEY ("A") REFERENCES "newsletters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_subscribersToNewsletters" ADD CONSTRAINT "_subscribersToNewsletters_B_fkey" FOREIGN KEY ("B") REFERENCES "subscribers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
