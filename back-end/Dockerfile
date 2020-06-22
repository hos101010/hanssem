FROM node:12

# 디렉토리 생성
RUN mkdir -p /app
WORKDIR /app
ADD . /app

# 의존성 설치
COPY package.json ./
RUN npm install

# 앱 소스 추가
COPY . .

EXPOSE 3001
CMD ["npm", "start"]