'use client'


import React, { useState, useEffect, useRef } from 'react'
import hljs from 'highlight.js';

interface PreviewProps {
   value: string;
}

const Preview = ({ value }: PreviewProps) => {
   const previewRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (previewRef.current) {
         previewRef.current.innerHTML = value;
         hljs.highlightAll();
      }
   }, [value]);

   return (
      <>
         <article className="preview-content">
            {/* <!-- POST Content --> */}
            <div id="preview" ref={previewRef}>
            </div>
         </article>
      </>
   )
}

export default Preview
