import hljs from 'highlight.js';


export const calculateReadingTime = (text: string): number => {
   // console.log("This is the content: ", text, "with a length of: ", text.length);
   const wordsPerMinute = 200;
   const words = text.split(/\s+/).length;
   return Math.ceil(words / wordsPerMinute);
 };

 export const highlightContent = (content: string): string => {
   const language = 'javascript'; // Specify the language or detect it dynamically
   const highlighted = hljs.highlight(content, { language }).value;
   // hljs.highlightAll()
   return highlighted;
 };