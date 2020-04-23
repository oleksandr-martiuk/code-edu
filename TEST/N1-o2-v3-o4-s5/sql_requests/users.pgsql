-- SELECT * FROM "users" LIMIT 1000;

-- $2a$10$WG.yowHEYnv9VzTa3BvbBexUdsTvImdybVmS1v7GPQ19Bdc797ZVa

UPDATE "users"
SET password = '$2a$10$WG.yowHEYnv9VzTa3BvbBexUdsTvImdybVmS1v7GPQ19Bdc797ZVa'
WHERE id=3;
