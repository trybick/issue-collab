# Issue Collab

[![Netlify Status](https://api.netlify.com/api/v1/badges/a515d6f7-91ed-4ce2-899a-5958d9600ba8/deploy-status)](https://app.netlify.com/sites/issue-collab/deploys)

> Một công cụ tìm kiếm được thiết kế để giúp bạn tìm những dự án mã nguồn mở

## Demo & Cách sử dụng

- Sử dụng phím bập bênh (toggle) để lọc kết quả. Bạn cũng có thể tùy chọn gõ từ khóa
- Click vào tựa đề để mở một issue trên Github ở tab mới

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/39889198/67807711-ba90b080-fa6b-11e9-9326-c1dface895c2.gif)

## Hoàn cảnh

Ý tưởng cho dự án này đến từ việc mong muốn tìm những dự án hay ho trên Github nhưng vẫn chưa thỏa mãn với tìm kiếm của Github.

Tôi bắt đầu tìm những issues [Hacktoberfest](https://medium.freecodecamp.org/i-just-got-my-free-hacktoberfest-shirt-heres-a-quick-way-you-can-get-yours-fa78d6e24307) (một sự kiện diễn ra hằng năm được tài trợ bởi Digital Ocean giúp khuyến khích các developer tham gia vào mã nguồn mở. Tạo 4 PRs trong một tháng để nhận được một áo thun MIỄN PHÍ 👕).

## Phát triển trên máy

Để chạy dự án này trên máy (local development) nếu bạn đã cài đặt Node.js hoặc NPM thì thực hiện những bước sau ở terminal. App sẽ chạy tại cổng 3000.

```bash
npm installgi
npm start
```

Nếu bạn không muốn cài đặt Node.js và bạn đã có Docker hiện diện trên hệ thống,
thì chỉ cần dùng `Dockerfile` và đoạn script chuẩn bị cho toàn bộ ứng dụng đặt ở một
thư mục chứa khác. App sẽ chạy trên cổng 3000.

```bash
./dev.sh
```

## Đóng góp

Cảm ơn vì sự hứng thú của bạn! Tất cả những hình thức đóng góp đều được hoan nghênh. **HACK AWAY!** 🔨🔨🔨

- Fork và clone từ repository này
- Tạo nhánh mới của bạn từ nhánh `master`
- Hãy mở một PR mới với nhánh `master` là căn bản.
- Đừng quên xem kết quả kiểm tra PR để chắc chắn rằng bản xem trước khi triển khai trên Netlify là chính xác.
