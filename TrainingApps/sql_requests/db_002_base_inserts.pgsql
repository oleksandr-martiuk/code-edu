INSERT INTO "users" (login, password)
       VALUES   ('ban', '123'),
                ('anna_maria', '35sd1f5ad3f'),
                ('zorro65', 'qwerty');

-- ('ban', '123')
-- ('anna_maria', '35sd1f5ad3f')
-- ('zorro65', '$2a$10$WG.yowHEYnv9VzTa3BvbBexUdsTvImdybVmS1v7GPQ19Bdc797ZVa')

INSERT INTO "tasks" (title, description)
       VALUES   ('Task # 01', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur risus eget sem vulputate, id consequat dolor mattis. Nullam eleifend bibendum lorem vel tempus. Fusce feugiat feugiat arcu, tincidunt consequat orci consectetur a. Morbi et lacinia massa, vitae consectetur justo. Phasellus sit amet fermentu.'),
                ('Task # 02', 'Phasellus est risus, sodales a bibendum ac, efficitur a ex. Aliquam sapien lacus, tempus ut leo et, ultrices dictum ex. Etiam nec semper purus. Nam sed turpis volutpat, vestibulum risus eget, viverra turpis. Fusce quis magna vitae risus dapibus consequat a at nibh. Pellentesque ultricies sagittis sapien, a posue.'),
                ('Task # 03', 'Quisque orci quam, luctus et eleifend ac, facilisis quis velit. Aliquam interdum nisl erat, eget finibus augue venenatis fringilla. Nulla eu sem non mauris ultricies ullamcorper vel id massa. Mauris eget rhoncus nulla. Praesent mollis felis et massa tincidunt, in accumsan ligula pretium. Integer suscipit, quam sit amet efficitur.'),
                ('Task # 04', 'Aliquam in libero non ante commodo ornare. Pellentesque ut viverra nulla. Nunc finibus vehicula vehicula. Pellentesque nec rutrum lectus. Nulla facilisi. Etiam a elementum tellus. Sed suscipit lectus tortor, a aliquam ante gravida ut. Quisque eget elit vitae enim pulvinar congue id eget dui. Fusce ma.'),
                ('Task # 05', 'Aliquam scelerisque efficitur nisl, at mollis elit tempus in. Suspendisse ac interdum velit. Maecenas ut efficitur quam, nec ornare nisi. Duis dictum dolor augue, eget molestie risus volutpat volutpat. Proin bibendum arcu id ligula tempus, volutpat facilisis nibh sagittis. Praesent blandit, urna nec vulputate commodo, nibh nibh rhoncus velit, at moll.'),
                ('Task # 06', 'Curabitur eleifend sit amet lectus sed feugiat. Fusce a placerat leo. Donec ultrices quam id quam ultrices feugiat. Integer nibh sapien, scelerisque in mi sit amet, pretium mollis ligula. Ut ut quam sed velit finibus tincidunt sed varius leo. Ut imperdiet augue in ultrices vestibulum. Nulla facilisi. Praesent in.'),
                ('Task # 07', 'Sed pharetra semper elementum. Nam et leo ligula. Sed at purus a augue tempus interdum sit amet et justo. Maecenas turpis augue, tristique sit amet mauris a, vestibulum venenatis sem. Curabitur vitae velit mauris. Donec aliquet leo vitae lobortis egestas. Cras at risus blandit, euismod orci accumsa.'),
                ('Task # 08', 'Ut sed tristique lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor purus neque, a rhoncus odio iaculis nec. Morbi rhoncus, velit ut convallis congue, quam urna sodales massa, a accumsan quam libero eget lorem. Integer malesuada justo eu nulla lobortis lacinia. Fusce rhoncus orci eget maximus imperdiet. Fusce porta sagittis purus vitae commodo. Nunc dignissim, eros id rhoncus hendrerit, turpis libero faucibus metus, at ele.'),
                ('Task # 09', 'Phasellus est risus, sodales a bibendum ac, efficitur a ex. Aliquam sapien lacus, tempus ut leo et, ultrices dictum ex. Etiam nec semper purus. Nam sed turpis volutpat, vestibulum risus eget, viverra turpis. Fusce quis magna vitae risus dapibus consequat a at nibh. Pellentesque ultricies sagittis sapien, a posuere augue vestibulum vitae. Sed lacus nulla, finibus ac ultricies quis, auctor in nulla. Vestibulum suscipit.');

INSERT INTO "users_tasks" (user_id, task_id, complete)
       VALUES   (1, 1, false),
                (1, 2, false),
                (1, 4, true),
                (1, 5, false),
                (1, 6, false),
                (1, 9, true),
                (2, 1, false),
                (2, 5, true),
                (2, 6, true),
                (3, 2, true),
                (3, 4, false),
                (3, 5, true),
                (3, 3, true),
                (3, 6, false),
                (3, 9, false),
                (3, 8, false);
