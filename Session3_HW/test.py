list = []

def average(list):
    sum = 0
    for i in list:
        sum += i
    result = sum / len(list)
    return result

# Step2. 모든 수 입력받고 list에 저장하기
while True:
    number = int(input('숫자를 입력하세요: '))
    if number == -1:
        break
    list.append(number)
    

# Step3. 함수 호출하고 결과값 출력하기
print(average(list))