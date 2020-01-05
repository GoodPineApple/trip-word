import csv
import json
import datetime
from trip_word.category_matcher import match
from trip_word.id_provider import get_id
from collections import OrderedDict

f = open('./file/word.csv', 'r', encoding='UTF8')
rdr = csv.reader(f)
i = 0
ex_category = ''

#0. 카드를 저장할 카테고리 객체 생성
category = OrderedDict()
cards = OrderedDict()

#1. CSV 파일을 라인마다 읽어옴
for line in rdr:
# for idx in [10, 11, 12]:
    i += 1
    if i == 1: # 첫번째 라인(컬럼명)은 건너뜀
        continue
    #csv 데이터 배열화 [카테고리,한국뜻,중국어,중국발음,한국발음]
    category_code = match(line[0])

    if category_code != ex_category:
        cards = OrderedDict()

    ex_category = category_code

    #JSON 객체 생성
    card = OrderedDict()

    id = get_id()

    card = {'id' : id,
               'category-code' : category_code,
               'category-name' : line[0],
               'korean' : line[1],
               'chinese' : line[2],
               'pronun-ch' : line[3],
               'pronun-kr' : line[4]
              }


    cards[id] = card
    category[category_code] = cards


print(json.dumps(category, ensure_ascii=False, indent='\t'))

time = datetime.datetime
file_name = 'trip_word' + time.strftime(time.now(), '%Y%m%d%H%M%S') + '.json'

with open('./file/'+file_name,'w', encoding='utf-8') as make_file:
    json.dump(category, make_file, ensure_ascii=False, indent='\t')
f.close()







# card["id"] = "123123123"
# card["category-code"] = "BASIC"
# card["category-name"] = "기초회화"
# card["korean"] = ""
# card["chinese"] = ""
# card["pronun-ch"] = ""
# card["pronun-kr"] = ""










