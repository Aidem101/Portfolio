# 🚀 Personal Portfolio

Современное и отзывчивое портфолио, созданное с использованием React.js и CSS для демонстрации моих проектов, навыков и опыта во время производственной практики.

## 🛠️ Технологии

- **Frontend**: React.js 19+
- **Сборщик**: Vite
- **Роутинг**: React Router v7
- **Стилизация**: Vanilla CSS
- **Иконки**: Lucide React
- **Email сервис**: EmailJS
- **Анимации**: CSS Transitions & Transforms

## 📁 Структура проекта

```
Portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── components/
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Быстрый старт

### Предварительные требования

- Node.js (версия 16.0 или выше)
- npm

### Установка

1. **Клонируйте репозиторий**
   ```bash
   git clone https://github.com/Aidem101/Portfolio.git
   cd Portfolio
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки**
   ```bash
   npm run dev
   ```

4. **Откройте браузер**
   
   Перейдите по адресу `http://localhost:5173`

## ⚙️ Настройка EmailJS

Для работы формы обратной связи необходимо настроить EmailJS:

1. **Зарегистрируйтесь на [EmailJS](https://www.emailjs.com/)**

2. **Создайте Email Service**
   - Выберите поставщика (Gmail, Outlook, etc.)
   - Настройте подключение

3. **Создайте Email Template**
   - Используйте переменные: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

4. **Получите учетные данные**
   - Service ID
   - Template ID  
   - Public Key

5. **Добавте свои данные в компоненте ContactForm.jsx**
   ```javascript
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',     // Замените на ваш Service ID
     'YOUR_TEMPLATE_ID',    // Замените на ваш Template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
       to_email: 'YOUR_EMAIL', // Ваш email
     },
     'YOUR_PUBLIC_KEY'      // Замените на ваш Public Key
   );
   ```

## 📦 Скрипты

```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр продакшен сборки
npm run preview

# Линтинг кода
npm run lint

# Исправление ошибок линтера
npm run lint:fix
```

---

⭐ Поставьте звезду этому репозиторию, если он был полезен!