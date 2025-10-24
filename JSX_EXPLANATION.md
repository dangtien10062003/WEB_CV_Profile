# Tại sao dự án React không có file .jsx?

## 🤔 **Câu hỏi thường gặp:**

### **Tại sao tất cả file đều là .js thay vì .jsx?**

## 📝 **Giải thích:**

### 1. **Cả .js và .jsx đều hoạt động tốt**
- **React** có thể xử lý cả hai extension
- **Babel** (transpiler) sẽ compile cả hai loại file
- **Webpack** và **Vite** đều hỗ trợ cả hai

### 2. **Lý do sử dụng .js thay vì .jsx:**

#### ✅ **Ưu điểm của .js:**
- **Đơn giản hơn** - Không cần phân biệt extension
- **IDE/Editor** ít bị confuse
- **Import/Export** dễ dàng hơn
- **Team consistency** - Tất cả đều dùng .js

#### ⚠️ **Nhược điểm:**
- **Syntax highlighting** có thể không chính xác
- **IntelliSense** có thể kém hơn
- **Khó phân biệt** file JSX vs JS thuần

### 3. **Khi nào nên dùng .jsx:**

#### 🎯 **Nên dùng .jsx khi:**
- **File chứa nhiều JSX** (components, pages)
- **Cần syntax highlighting tốt**
- **Team quy định rõ ràng**
- **Dự án lớn** cần phân biệt rõ

#### 🎯 **Có thể dùng .js khi:**
- **Dự án nhỏ** như portfolio này
- **Team đã quen** với .js
- **Cấu hình build** đã setup sẵn

## 🔧 **Cách chuyển đổi:**

### **Từ .js sang .jsx:**
```bash
# Rename files
mv src/components/Navbar.js src/components/Navbar.jsx
mv src/pages/Home.js src/pages/Home.jsx
# ... và các file khác
```

### **Cập nhật imports:**
```javascript
// Trước
import Navbar from './components/Navbar';

// Sau (nếu cần)
import Navbar from './components/Navbar.jsx';
```

## 📁 **Cấu trúc file trong dự án:**

```
src/
├── components/
│   ├── Navbar.js          ← Có thể đổi thành .jsx
│   ├── Footer.js          ← Có thể đổi thành .jsx
│   ├── BackToTop.js       ← Có thể đổi thành .jsx
│   └── ExampleJSX.jsx     ← File JSX mẫu
├── pages/
│   ├── Home.js            ← Có thể đổi thành .jsx
│   ├── Skills.js          ← Có thể đổi thành .jsx
│   └── ExamplePage.jsx     ← File JSX mẫu
└── contexts/
    ├── ThemeContext.js    ← Có thể giữ .js
    └── LanguageContext.js ← Có thể giữ .js
```

## 🎨 **Demo JSX Features:**

Tôi đã tạo 2 file JSX mẫu:
- `src/components/ExampleJSX.jsx` - Component JSX đơn giản
- `src/pages/ExamplePage.jsx` - Trang JSX với nhiều tính năng

## 🚀 **Kết luận:**

**Không có gì sai** khi dùng .js cho React components! 
- **Cả hai đều hoạt động** hoàn hảo
- **Tùy thuộc vào team** và quy ước
- **Quan trọng nhất** là **consistency** trong dự án

---

## 💡 **Lời khuyên:**

1. **Dự án nhỏ** → Dùng .js (như hiện tại)
2. **Dự án lớn** → Nên dùng .jsx cho components
3. **Team mới** → Nên dùng .jsx để rõ ràng
4. **Đã setup sẵn** → Giữ nguyên .js

**Quan trọng:** Cả hai cách đều **hoàn toàn chính xác** và **không ảnh hưởng** đến performance!
