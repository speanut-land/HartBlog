# Markdown writing norms 

## Title

1. Aviod jump title eg:  Heading 3 appears under Heading 1
2. Aviod separate number eg: Heading 2 => Heading 3 => Heading2 , can be omitted Heading 3   
3. Subtitles don't repeat superior title eg: Heading2 A => Heading3 A
4. Use item list instead of Heading 4

## Text

### Word spacing

1. Full width Chinese character <=> Half width Englist character should be have half width space eg: 介绍 window 系统

2. Englist unit don't translation, should be left gaps

   ```
   eg1: 一部容量为 16 GB 的智能手机
   eg2: 1 h = 60 min = 3,600s 
   ```

### Sentence

1. Aviod use long sentence, should be separated by commas
2. sentence have the same meaning, which should be used positive sentence pattern
3. Aviod double negation 
4. Try to use simple sentences and parallel sentences, Aviod using compound sentences 

### Writing style 

1. Aviod using passive voice and use the active voice instead

2. Use formal language style 

3. 用对 "的"、"地"、"得"

   ```
   她露出了开心的笑容。
   （形容词＋的＋名词）
   
   她开心地笑了。
   （副词＋地＋动词）
   
   她笑得很开心。
   （动词＋得＋副词）
   ```

4. using common expressions of modern Chinese

5. 使用代词时（比如“其”、“该”、“此”、“这”等词），必须明确指代的内容，保证只有一个含义

   ```
   错误：从管理系统可以监视中继系统和受其直接控制的分配系统。
   
   正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。
   ```

### Englist process

1. ... <=> Chinese ......
2. "The Wonderful Wizard of Oz"
3. First appear English vocabulary, Chinese labels  are given in brackets 
4. First letter should be capitalized in proper nouns. 

##  Paragraph

### Principle

+ a paragraph only have a topic, or one central sentence
+ the central sentence of the paragraph is placed at the beginning of the Paragraph, giving an overview of the entire paragraph
+ Sentence tone should be use statement and affirmation tone, aviod using exclamation tone
+ Using a blank line between paragraph 
+ Don't leave blank characters at the beginning of the paragraph

### Quoting

quoting third -party content, the source should be indicated

```
One man’s constant is another man’s variable. — Alan Perlis
```

If the entire article is reproduced, please indicate the author and source at a prominent position at the beginning of the full text, and link to the original text 

```
本文转载自 WikiQuote
```

when using external pictures, the source must be indicated below the picture or at the end of the article

```
本文部分图片来自 Wikipedia
```

## Punctuation marks

### Principle

1. Chinese sentence should all adopt full-width symbol, so as to maintain visual consistency with full-width characters

2. if entire sentence is in English, the sentence uses English half-width punctuation

3. （；）the semicolon indicates the pause between the parallel clauses within the complex sentence

4. when quoting, you should use full-width doubt quotes（“”）

5. When supplement the explanation, use full-width（）without space before and after the parentheses

   ```
   例句：请确认所有的连接（电缆和接插件）均安装牢固。
   ```

### 破折号

（1）破折号`————`一般用于进一步解释。

（2）破折号应占两个汉字的位置。如果破折号本身只占一个汉字的位置，那么前后应该留出一个半角空格。

```
例句：直觉————尽管它并不总是可靠的————告诉我，这事可能出了些问题。

例句：直觉 —— 尽管它并不总是可靠的 —— 告诉我，这事可能出了些问题。
```

（3）以下场合应该使用直线连接号（`-`），占一个半角字符的位置。

- 两个名词的复合
- 图表编号

```
例句：氧化-还原反应

例句：图 1-1
```

## Document system

### Structure

The software manual is a complete book, and the following structure is recommended

- **简介**（Introduction）： [必备] [文件] 提供对产品和文档本身的总体的、扼要的说明

- **快速上手**（Getting Started）：[可选] [文件] 如何最快速地使用产品

- 入门篇

  （Basics）： [必备] [目录] 又称”使用篇“，提供初级的使用教程

  - **环境准备**（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件
  - **安装**（Installation）：[可选] [文件] 软件的安装方法
  - **设置**（Configuration）：[必备] [文件] 软件的设置

- **进阶篇**（Advanced)：[可选] [目录] 又称”开发篇“，提供中高级的开发教程

- **API**（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍

- **FAQ**：[可选] [文件] 常见问题解答

- 附录

  （Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容

  - **Glossary**：[可选] [文件] 名词解释
  - **Recipes**：[可选] [文件] 最佳实践
  - **Troubleshooting**：[可选] [文件] 故障处理
  - **ChangeLog**：[可选] [文件] 版本说明
  - **Feedback**：[可选] [文件] 反馈方式

下面是两个真实范例，可参考。

- [Redux 手册](https://redux.js.org/introduction/getting-started)
- [Atom 手册](http://flight-manual.atom.io/)