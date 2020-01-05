category = {
    '기초회화': 'BASIC',
    '숫자/날짜': 'NUMTIME',
    '교통': 'TRAFFIC',
    '쇼핑': 'SHOPPING',
    '식당': 'RESTAURANT',
    '호텔': 'HOTEL',
    '비상시': 'EMERGENCY'
}


def match(cateName):
    return category[cateName]
