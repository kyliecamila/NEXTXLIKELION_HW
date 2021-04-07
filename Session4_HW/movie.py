
def extract_info(movie_list):
    result =[]
    for movie in movie_list:
        title = movie.find("dt", {"class":"tit"}).find("a").text
        image = movie.find("div", {"class" : "thumb"}).find("a").find("img")['src']
        points = movie.find("span", {"class" : "num"}).text
        date = movie.find("dl", {"class": "info_txt1"}).find_all("dd")[0].text
        ddTags = movie.find("dl", {"class": "info_txt1"}).find_all("dd")
        director = ddTags[1].text
        # director = movie.find("dl", {"class": "info_txt1"}).find_all("dd")[1].text
        if len(ddTags)==2:
            actors= "none"
        else:
            actors = ddTags[2].text   
        date = date.replace('\r','').replace('\t','').replace('\n','')    
        date = date.split("|")
        
       
        movie_info = {
            '제목': title,
            '포스터': image,
            '평점' :points,
            '개봉일자': date[-1],
            '감독' : director.replace('\r','').replace('\t','').replace('\n',''),
            '출연': actors.replace('\r','').replace('\t','').replace('\n','')
            }
        result.append(movie_info)
    return result



    