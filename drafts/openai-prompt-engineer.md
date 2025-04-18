---
title: Prompt engineering - 提示工程
description: OpenAI 針對 prompt 的使用建議指南
editedAt: 2024-08-23T15:09:00+08:00
category: AGI
tags: prompt
datetime: 2025-04-17T11:17:00+08:00
---
<h1>Prompt engineering</h1>

<h1>提示工程</h1>

his guide shares strategies and tactics for getting better results from large language models (sometimes referred to as GPT models) like GPT-4o. The methods described here can sometimes be deployed in combination for greater effect. We encourage experimentation to find the methods that work best for you.

這份指南分享了從大型語言模型（有時會稱為 GPT 模型），如 GPT-4o 中獲得更好結果的策略和方案。這裏描述的方法有時可以結合使用以達到更好的效果。我們鼓勵多進行實驗，以找出最符合你需求的方法。

You can also explore example prompts which showcase what our models are capable of:

你也可以探索這些 prompts 的範例，這些範例展示了我們的模型能夠達到的效果：

[**Prompt examples**](https://platform.openai.com/examples)

## Six strategies for getting better results

### Write clear instructions

## 獲得更好結果的 6 個策略

### 撰寫清晰的指示

These models can’t read your mind. If outputs are too long, ask for brief replies. If outputs are too simple, ask for expert-level writing. If you dislike the format, demonstrate the format you’d like to see. The less the model has to guess at what you want, the more likely you’ll get it.

這些模型無法知道你的想法。如果輸出內容太長，要求簡短的回覆。如果輸出內容太過簡單，要求專家級別的輸出內容。如果你不喜歡輸出的格式，示範你希望看到的格式。模型需要猜測的越少，你越有可能得到你想要的結果。

Tactics:

- [Include details in your query to get more relevant answers](https://platform.openai.com/docs/guides/prompt-engineering/tactic-include-details-in-your-query-to-get-more-relevant-answers)
- [Ask the model to adopt a persona](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-to-adopt-a-persona)
- [Use delimiters to clearly indicate distinct parts of the input](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-delimiters-to-clearly-indicate-distinct-parts-of-the-input)
- [Specify the steps required to complete a task](https://platform.openai.com/docs/guides/prompt-engineering/tactic-specify-the-steps-required-to-complete-a-task)
- [Provide examples](https://platform.openai.com/docs/guides/prompt-engineering/tactic-provide-examples)
- [Specify the desired length of the output](https://platform.openai.com/docs/guides/prompt-engineering/tactic-specify-the-desired-length-of-the-output)

方案：

- 在你的請求中包含更多細節，以獲得更相關的答案
- 要求模型採用某個特定角色的語氣或風格
- 使用分隔符來清楚的標示輸入的不同部分
- 明確說明完成任務所需的步驟
- 提供範例
- 明確說明需要的輸出長度

### **Provide reference text**

Language models can confidently invent fake answers, especially when asked about esoteric topics or for citations and URLs. In the same way that a sheet of notes can help a student do better on a test, providing reference text to these models can help in answering with fewer fabrications.

Tactics:

- [Instruct the model to answer using a reference text](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-using-a-reference-text)
- [Instruct the model to answer with citations from a reference text](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-with-citations-from-a-reference-text)

### 提供參考文本

語言模型可能會自信的捏造答案，特別是在被問一些深奧的話題，或引文和網址時。就像筆記能幫助學生在考試中表現更好一樣，提供參考的文本給這些模型可以減少它們捏造的部分。

方案：

- 指示模型使用參考文本來回答問題。
- 指示模型使用參考文本的引文來回答問題。

## **Split complex tasks into simpler subtasks**

Just as it is good practice in software engineering to decompose a complex system into a set of modular components, the same is true of tasks submitted to a language model. Complex tasks tend to have higher error rates than simpler tasks. Furthermore, complex tasks can often be re-defined as a workflow of simpler tasks in which the outputs of earlier tasks are used to construct the inputs to later tasks.

Tactics:

- [Use intent classification to identify the most relevant instructions for a user query](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-intent-classification-to-identify-the-most-relevant-instructions-for-a-user-query)
- [For dialogue applications that require very long conversations, summarize or filter previous dialogue](https://platform.openai.com/docs/guides/prompt-engineering/tactic-for-dialogue-applications-that-require-very-long-conversations-summarize-or-filter-previous-dialogue)
- [Summarize long documents piecewise and construct a full summary recursively](https://platform.openai.com/docs/guides/prompt-engineering/tactic-summarize-long-documents-piecewise-and-construct-a-full-summary-recursively)

## 將複雜的任務拆分為相對簡單的子任務

就如在軟體工程中將複雜系統拆解成一系列模組化組件是一個好的方向，對於提交給語言模型的任務也應該如此。複雜任務的錯誤率往往高於簡單任務。此外，複雜任務通常可以用多個簡單任務的構成的工作流程來替代，流程中較早執行的任務的輸出會被用來作為較晚執行的任務的輸入。

方案：

- 使用 intent classification 來識別用戶的請求中最相關的指示。
- 對於需要進行非常長的對話的應用，總結或篩選前面對話過的內容。
- 將長文件進行分段摘要，並遞歸的執行，以構建一個完整摘要。

## **Give the model time to "think"**

If asked to multiply 17 by 28, you might not know it instantly, but can still work it out with time. Similarly, models make more reasoning errors when trying to answer right away, rather than taking time to work out an answer. Asking for a "chain of thought" before an answer can help the model reason its way toward correct answers more reliably.

Tactics:

- [Instruct the model to work out its own solution before rushing to a conclusion](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion)
- [Use inner monologue or a sequence of queries to hide the model's reasoning process](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-inner-monologue-or-a-sequence-of-queries-to-hide-the-model-s-reasoning-process)
- [Ask the model if it missed anything on previous passes](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-if-it-missed-anything-on-previous-passes)

## 給模型時間來“思考”

如果你被問 17 乘以 28 是多少，你可能無法立即得出答案，但仍然可以通過一些時間計算出來。相同的，模型立即回答問題時會更容易出錯，而花時間計算的話，錯誤就會下降。要求模型在回答之前進行 chain of thought ，可以幫助模型更可靠的推理出正確答案。

方案：

- 在得到結論前，指示模型自行找出解決方案。
- 使用內在的獨白或是一系列的請求來隱藏模型的思考過程。
- 詢問模型在前面的執行中是否有遺漏東西

## **Use external tools**

Compensate for the weaknesses of the model by feeding it the outputs of other tools. For example, a text retrieval system (sometimes called RAG or retrieval augmented generation) can tell the model about relevant documents. A code execution engine like OpenAI's Code Interpreter can help the model do math and run code. If a task can be done more reliably or efficiently by a tool rather than by a language model, offload it to get the best of both.

Tactics:

- [Use embeddings-based search to implement efficient knowledge retrieval](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)
- [Use code execution to perform more accurate calculations or call external APIs](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-code-execution-to-perform-more-accurate-calculations-or-call-external-apis)
- [Give the model access to specific functions](https://platform.openai.com/docs/guides/prompt-engineering/tactic-give-the-model-access-to-specific-functions)

## 使用外部的工具

使用其他工具的輸出來彌補模型的弱點。例如，文本檢索系統（有時稱為 RAG 或是檢索增強生成）可以向模型提供相關文件資訊。像是 OpenAI 的 Code Interpreter 這樣的程式執行引擎可以幫助模型進行數學運算和程式執行。如果某項任務可以通過工具更可靠或高效的完成，相比分配給語言模型，分配給工具可以獲得更好的效果。

方案：

- 使用 embeddings-based 的搜索來實現高效的知識檢索。
- 使用執行的程式進行更精確的計算，或是呼叫外部 API 。
- 賦予模型權限訪問特定功能

## **Test changes systematically**

Improving performance is easier if you can measure it. In some cases a modification to a prompt will achieve better performance on a few isolated examples but lead to worse overall performance on a more representative set of examples. Therefore to be sure that a change is net positive to performance it may be necessary to define a comprehensive test suite (also known an as an "eval").

Tactic:

- [Evaluate model outputs with reference to gold-standard answers](https://platform.openai.com/docs/guides/prompt-engineering/tactic-evaluate-model-outputs-with-reference-to-gold-standard-answers)

## 系統的測試修改

如果可以量化模型的表現，才能相對容易的進行提升。在某些情況下，對提示的修改可能會在少數獨立的例子上取得更好的表現，但在更具代表性的多數例子上整體的表現出現下降。因此，為了確保對提示的修改能保持對模型的總體表現的影響是正面的，可能有必要定義一個全面的 test suite 。

方案：

- 參考標準答案來評估模型的輸出

# **Tactics**

Each of the strategies listed above can be instantiated with specific tactics. These tactics are meant to provide ideas for things to try. They are by no means fully comprehensive, and you should feel free to try creative ideas not represented here.

# 方案

上面列出的每個策略都可以通過具體的方案實現。這些方案是為了提供一些可嘗試的方向。它們並非是完全全面的，所以你可以任意的嘗試任何未在這裡列出的想法。

## **Strategy: Write clear instructions**

### **Tactic: Include details in your query to get more relevant answers**

In order to get a highly relevant response, make sure that requests provide any important details or context. Otherwise you are leaving it up to the model to guess what you mean.

| **Worse** | **Better** |
| --- | --- |
| How do I add numbers in Excel? | How do I add up a row of dollar amounts in Excel? I want to do this automatically for a whole sheet of rows with all the totals ending up on the right in a column called "Total". |
| Who’s president? | Who was the president of Mexico in 2021, and how frequently are elections held? |
| Write code to calculate the Fibonacci sequence. | Write a TypeScript function to efficiently calculate the Fibonacci sequence. Comment the code liberally to explain what each piece does and why it's written that way. |
| Summarize the meeting notes. | Summarize the meeting notes in a single paragraph. Then write a markdown list of the speakers and each of their key points. Finally, list the next steps or action items suggested by the speakers, if any. |
