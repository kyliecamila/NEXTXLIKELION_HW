import requests
from bs4 import BeautifulSoup
from movie import extract_info
import csv

file = open('movie.csv', mode = 'w', newline ='')
writer = csv.writer(file)
writer.writerow(["제목", "포스터", "평점", "개봉일자", "감독", "출연"])

movie_URL = f'https://movie.naver.com/movie/running/current.nhn#'
movie_html = requests.get(movie_URL)
movie_soup = BeautifulSoup(movie_html.text, "html.parser")

movie_list_box = movie_soup.find("ul", {"class": "lst_detail_t1"})
movie_list = movie_list_box.find_all("li")
result = extract_info(movie_list)

for items in result:
    print(items)
    row = []
    row.append(items['제목'])
    row.append(items['포스터'])
    row.append(items['평점'])
    row.append(items['개봉일자'])
    row.append(items['감독'])
    row.append(items['출연'])
    writer.writerow(row)


