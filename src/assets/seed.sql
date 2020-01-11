CREATE TABLE IF NOT EXISTS menu(menu_id INTEGER PRIMARY KEY AUTOINCREMENT, menu_code TEXT, menu_name TEXT, menu_color TEXT, menu_img TEXT);
INSERT or IGNORE INTO menu VALUES (1, 'BASIC', '기본', '#fff000', '/assets/img/menu/basic.png');

CREATE TABLE IF NOT EXISTS word(word_id INTEGER PRIMARY KEY AUTOINCREMENT, menu_code INTEGER, menu_name TEXT, korean TEXT, chinese TEXT, pronun_ch TEXT, pronun_kr TEXT, is_my_word, TEXT);
INSERT or IGNORE INTO menu VALUES (1, 'BASIC', '기본', '나', '중국어', 'na', '나', 'N');