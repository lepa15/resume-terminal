# Мини-руководство по созданию терминала в Next.js с Tailwind и TypeScript

## 1. Объекты данных в TypeScript
```ts
export type AboutInfo = {
  name: string;
  role: string;
  bio: string;
  location: string;
};

export const about: AboutInfo = {
  name: "Алексей Олейник",
  role: "Frontend Developer",
  bio: "Люблю создавать быстрые, доступные и красивые интерфейсы.",
  location: "Кишинёв, Молдова",
};

export const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind"];
export const projects = [
  { name: "Проект 1", description: "Описание проекта 1" },
  { name: "Проект 2", description: "Описание проекта 2" },
];
```

---

## 2. Компонент Terminal
```tsx
"use client";

import { useState, KeyboardEvent } from "react";
import { about, skills, projects } from "./data";

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let output = "";
      if (input === "about") output = `${about.name} - ${about.role}\n${about.bio}\n${about.location}`;
      else if (input === "skills") output = skills.join(", ");
      else if (input === "projects")
        output = projects.map(p => `${p.name}: ${p.description}`).join("\n");
      else output = `Команда "${input}" не найдена`;

      setLines([...lines, `$ ${input}`, output]);
      setInput("");
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 flex flex-col min-h-screen overflow-y-auto">
      {lines.map((line, i) => (
        <div key={i} className="mb-1">{line}</div>
      ))}
      <div className="flex items-center">
        <span className="mr-2">$</span>
        <input
          className="flex-1 bg-black text-green-400 outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          autoFocus
        />
        <span className="cursor">_</span>
      </div>
    </div>
  );
}
```

---

## 3. Tailwind классы для терминала

| Элемент                     | Классы Tailwind                        | Описание |
|------------------------------|---------------------------------------|----------|
| Основной контейнер           | `bg-black text-green-400 font-mono p-4 flex flex-col min-h-screen overflow-y-auto` | Черный фон, зелёный текст, моноширинный, padding 16px, вертикальный flex, полная высота, прокрутка |
| Строки текста                | `mb-1 text-white` / `text-gray-400`   | Отступы между строками, цвет текста |
| Линия ввода                  | `flex items-center`                    | Flex-контейнер для знака `$` и input |
| Знак `$`                     | `mr-2`                                 | Отступ справа от знака |
| Input                        | `flex-1 bg-black text-green-400 outline-none` | Input растягивается на всю оставшуюся ширину, фон и цвет как у терминала, без рамки |
| Курсор                       | `cursor` (CSS с animation: blink)      | Мигающий курсор |
| Ошибки / предупреждения      | `text-red-500` / `text-yellow-400`    | Для сообщений об ошибках или подсказок |

---

## 4. CSS для мигающего курсора
```css
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s step-start infinite;
}
```

---

## 5. Команды терминала

- `about` → выводит объект `about` из TypeScript
- `skills` → выводит массив навыков
- `projects` → выводит массив проектов
- Любая другая команда → `Команда "<введено>" не найдена`

---

## 6. Рекомендации по сохранению диалога

1. Экспортировать диалог из ChatGPT в PDF или текстовый файл.
2. Создать папку `docs` или `notes` в проекте и положить файл туда (`terminal-tutorial.md`).
3. Закоммитить и запушить в GitHub для доступа с других устройств.

