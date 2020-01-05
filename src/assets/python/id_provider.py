import string
import random

# 20자리 # 숫자 + 대소문자 + 특수문자
_LENGTH = 20

# 랜덤한 문자열 생성
# string_pool = string.ascii_letters + string.digits + string.punctuation
string_pool = string.ascii_letters + string.digits


def get_id():
    result = ""
    for i in range(_LENGTH):
        result += random.choice(string_pool)  # 랜덤한 문자열 하나 선택
    return result
