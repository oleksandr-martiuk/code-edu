-- SELECT table_name FROM information_schema.tables WHERE table_schema='public';

-- SELECT * FROM "users";
-- SELECT * FROM "tasks";
-- SELECT * FROM "users_tasks";

SELECT u.login, t.title
FROM users u
JOIN users_tasks ut
    ON u.id = ut.user_id
JOIN tasks t
    ON t.id = ut.task_id
WHERE ut.complete = true
ORDER BY u.login ASC, t.title ASC;
