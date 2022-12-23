<template>
  <!-- <link rel="stylesheet" href="/node_modules/highlight.js/styles/atom-one-dark-reasonable.css"> -->
  <link rel="stylesheet" href="/node_modules/highlight.js/styles/vs2015.css">
  <div>
    <div v-html="html"></div>
  </div>
</template>
<script lang="ts" setup>
import hljs from 'highlight.js/lib/core'
</script>
<script lang="ts">
import { marked } from 'marked';
export default {
  data() {
    return {
      markdown: '# 加载中...',
    }
  }, computed: {
    html() {
      return marked(this.markdown, {
        highlight: (code, lang) => {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          const result = hljs.highlight(code, { language }).value
          //add copy button to code block
          // border
          // background
          // copy button
          let copyButton = `<button class="copy-button">复制</button>`;
          //active all copy-button
          setTimeout(() => {
            let copyButtons = document.querySelectorAll('.copy-button');
            if ((copyButtons as any).hasAddCopyEvent == true) return;
            (copyButtons as any).hasAddCopyEvent = true;
            copyButtons.forEach((copyButton) => {
              copyButton.addEventListener('click', (e) => {
                let codeBlock = (e as any).target.parentNode.querySelector('code');
                let range = document.createRange();
                range.selectNode(codeBlock);
                window.getSelection()?.removeAllRanges();
                window.getSelection()?.addRange(range);
                document.execCommand('copy');
             //   window.getSelection()?.removeAllRanges();
                (e as any).target.innerText = '已复制';
                setTimeout(() => {
                  (e as any).target.innerText = '复制';
                }, 1000);
              });
            });
          }, 1000); 
          // code block
          let codeBlock = `<pre class="hljs"><code>${result}</code></pre>`;
          // wrapper
          let wrapper = `<div class="code-block-wrapper">${copyButton}${codeBlock}</div>`;
          return wrapper;
        }
      });
    }
  }, mounted() {
    let mirrors = [
      'https://raw.githubusercontent.com/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
      'https://jsd.cdn.zzko.cn/gh/LazuliKao/PixelFaramitaLuminousPolymerizationRes@main/docs/RemoteCall.md',
      'https://cdn.jsdelivr.net/gh/LazuliKao/PixelFaramitaLuminousPolymerizationRes@main/docs/RemoteCall.md',
      'https://raw.iqiq.io/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
      'https://raw.fastgit.org/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
      'https://raw.kgithub.com/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
      'https://raw.sevencdn.com/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
      'https://raw.githack.com/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
      'https://github.moeyy.xyz/https://raw.githubusercontent.com/LazuliKao/PixelFaramitaLuminousPolymerizationRes/main/docs/RemoteCall.md',
    ];
    let i = 0;
    let load = () => {
      fetch(mirrors[i++]).then(res => {
        if (res.ok) {
          res.text().then(text => {
            this.markdown = text;
          });
        } else {
          if (i < mirrors.length) {
            load();
          } else {
            this.markdown = '加载失败';
          }
        }
      });
    };
    load();
  }
}
</script>
<style >
details {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
}

details summary {
  cursor: pointer;
  outline: none;
} 
.code-block-wrapper {
  border: 1px solid #f7e926;
  border-radius: 4px;
  padding:4px;
  margin-left: 10px;
} 
/** style all table header with green background*/
table th {
  background-color: #00696b;
}
/** style all table cell with padding*/
table td {
  padding: 5px;
}
/** style all table cell with border*/
table td, table th {
  border: 1px solid #e6e6e6;
}
/** style copy button with material design style*/
.copy-button { 
  background-color: #005d38;
  border: none;
  color: white;
  padding: 4px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  /**align to top right */
  position: absolute;
  top: 1;
  right: 0;
  /**show in top layer */
  z-index: 1; 
}
/** style of divider */
hr {
  border: 2px solid #300002;
  margin: 10px 0;
}

</style>