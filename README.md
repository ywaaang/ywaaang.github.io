# 前端工具箱

一个基于React的前端开发工具集合，包含多个实用的小工具。

## 功能特性

- **JSON格式化工具**: 支持JSON格式化、验证和递归解析嵌套的JSON字符串
- **Base64编码工具**: Base64编码和解码
- **URL编码工具**: URL编码和解码
- 左侧标签栏切换不同工具
- 响应式设计，适配不同屏幕尺寸
- 现代化的UI设计

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Lucide React (图标)
- 自定义UI组件

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 项目结构

```
src/
├── components/
│   └── ui/                 # UI组件
├── tools/                  # 工具组件
│   ├── JsonFormatter.jsx   # JSON格式化工具
│   ├── Base64Tool.jsx      # Base64编码工具
│   └── UrlEncoder.jsx      # URL编码工具
├── lib/
│   └── utils.js           # 工具函数
├── App.jsx                # 主应用组件
├── main.jsx               # 入口文件
└── index.css              # 全局样式
```

## 使用说明

### JSON格式化工具
- 支持标准JSON格式化
- 自动识别和解析JSON字符串中的嵌套JSON数据
- 提供格式化和压缩功能
- 支持复制结果到剪贴板

### Base64编码工具
- 支持文本到Base64编码
- 支持Base64解码到文本
- 提供编码/解码模式切换
- 支持结果交换和复制

### URL编码工具
- 支持URL编码
- 支持URL解码
- 处理特殊字符转换
- 支持结果交换和复制

## 开发

项目使用Vite作为构建工具，支持热重载和快速开发。

## 许可证

MIT License 