FROM node:20

# Thư mục làm việc trong container
WORKDIR /app

# Cài dependencies trước
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Expose cổng Vite (mặc định là 5173)
EXPOSE 9091

# Chạy Vite dev server
CMD ["npm", "run", "dev"]
