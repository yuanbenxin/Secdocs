<template><div><div id="team-page">
  <!-- 桌面版内容 -->
  <div class="desktop-view">
    <div class="content-container">
      <h6 class="intro-text">👋 你好，我们是</h6>
      <h1 class="team-name">SecRandom开发团队：</h1>
      <div class="typing-container">
        <h2 class="typing-text">
          <span id="typing-text"></span>
          <span class="cursor" id="cursor"></span>
        </h2>
      </div>
    </div>
  </div>
  <!-- 移动设备提示 -->
  <div class="mobile-view">
    <div class="incompatible-message">
      <div class="warning-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L1 21h22L12 1zm0 4l7.53 13H4.47L12 5zm1 10h-2v2h2v-2zm0-4h-2v4h2v-4z"/>
        </svg>
      </div>
      <h2>不兼容的设备</h2>
      <p>本页面专为桌面设备设计，请使用电脑访问以获得最佳体验</p>
      <p>或者尝试横屏使用您的设备</p>
      <a href="/" class="back-button">返回首页</a>
    </div>
  </div>
</div>
</div></template>

<script>
// 增强型DOMContentLoaded事件处理
function initTeamPage() {
  console.log("团队页面初始化开始");
  
  // 创建背景装饰元素
  const decor = document.createElement('div');
  decor.className = 'background-decor';
  document.getElementById('team-page').appendChild(decor);
  
  // 获取打字机元素
  const typingElement = document.getElementById('typing-text');
  const cursorElement = document.getElementById('cursor');
  
  // 确保元素存在
  if (!typingElement || !cursorElement) {
    console.error('无法找到打字机元素');
    
    // 创建错误信息显示
    const errorMsg = document.createElement('div');
    errorMsg.style.color = 'red';
    errorMsg.style.position = 'fixed';
    errorMsg.style.top = '20px';
    errorMsg.style.left = '20px';
    errorMsg.style.zIndex = '100000';
    errorMsg.style.padding = '10px';
    errorMsg.style.background = 'rgba(0,0,0,0.7)';
    errorMsg.style.borderRadius = '5px';
    errorMsg.textContent = '错误: 无法找到打字机元素';
    document.body.appendChild(errorMsg);
    
    return;
  }
  
  // 显示光标
  cursorElement.style.display = 'inline-block';
  
  // 打字机效果实现
  const texts = [
    "黎泽懿 Aionflux(设计&创意&策划&维护&文档&测试)",
    "弃稞之草(创意&维护)",
    "system-linux-cmb(应用测试)",
    "本新同学(响应式前端页面设计及维护&文档)"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseTime = 2000;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // 删除字符
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // 添加字符
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    // 状态变化
    if (!isDeleting && charIndex === currentText.length) {
      // 完成输入，等待后开始删除
      isDeleting = true;
      typingSpeed = 50; // 删除速度更快
      setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // 完成删除，切换到下一个文本
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 100; // 恢复正常打字速度
      setTimeout(type, 500);
    } else {
      // 继续输入/删除
      setTimeout(type, typingSpeed);
    }
  }
  
  // 开始打字效果
  console.log('启动打字机效果');
  type();
  
  // 添加调试信息
  const debugInfo = document.createElement('div');
  debugInfo.style.color = '#66ccff';
  debugInfo.style.position = 'fixed';
  debugInfo.style.bottom = '20px';
  debugInfo.style.left = '20px';
  debugInfo.style.zIndex = '100000';
  debugInfo.style.padding = '10px';
  debugInfo.style.background = 'rgba(0, 0, 0, 0)';//显示对象请改颜色值
  debugInfo.style.borderRadius = '5px';
  debugInfo.style.fontSize = '14px';
  //debugInfo.textContent = '状态: 打字机效果已启动 | JS已执行';
  document.body.appendChild(debugInfo);
  
  // 强制隐藏主题元素（二次保险）
  const themeElements = [
    '.navbar',
    '.sidebar',
    '.page-meta',
    '.page-nav',
    '.footer',
    '.sidebar-button',
    '.vp-sidebar',
    '.vp-navbar',
    '.theme-hope-content'
  ];
  
  themeElements.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.display = 'none';
      el.style.visibility = 'hidden';
      el.style.opacity = '0';
      el.style.height = '0';
      el.style.width = '0';
      el.style.padding = '0';
      el.style.margin = '0';
    });
  });
  
  console.log("团队页面初始化完成");
}

// 多种方式确保脚本执行
if (document.readyState === 'loading') {
  // 文档仍在加载
  document.addEventListener('DOMContentLoaded', initTeamPage);
} else {
  // 文档已经加载完毕
  setTimeout(initTeamPage, 100);
}

// 二次保险！如果仍未执行，在窗口加载时再试一次
window.addEventListener('load', function() {
  if (!window.teamPageInitialized) {
    console.log('通过window.load事件初始化团队页面');
    initTeamPage();
    window.teamPageInitialized = true;
  }
});

// 三次保险！5秒后再确认是否初始化
setTimeout(function() {
  if (!window.teamPageInitialized) {
    console.log('通过超时初始化团队页面');
    initTeamPage();
    window.teamPageInitialized = true;
  }
}, 5000);
</script>

<style>
/* === 基础样式重置 === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
}

/* === 隐藏所有主题元素 === */
/* 导航栏 */
.navbar,
/* 侧边栏 */
.sidebar,
/* 页面元信息 */
.page-meta,
/* 页面导航 */
.page-nav,
/* 页脚 */
.footer,
/* 侧边栏按钮 */
.sidebar-button,
/* 其他可能出现的主题元素 */
.theme-hope-content,
.vp-sidebar,
.vp-navbar {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  width: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* === 清除主题默认样式 === */
.theme-container {
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  min-height: 100vh !important;
}

.page {
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  min-height: 100vh !important;
}

#app {
  background: transparent !important;
}

/* === 团队页面核心样式 === */
#team-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
  background: linear-gradient(135deg, #0a192f 0%, #1a365d 100%);
  z-index: 10000;
  overflow: hidden;
}

/* 背景装饰 */
.background-decor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(35, 136, 246, 0.1) 0%, transparent 70%);
  z-index: -1;
}

/* 桌面版样式 */
.desktop-view {
  display: block;
  height: 100%;
}

.content-container {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  text-align: left;
  padding: 40px;
  border-radius: 15px;
  background: rgba(10, 25, 47, 0.85);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  max-width: 700px;
  min-width: 500px;
  border: 1px solid rgba(35, 136, 246, 0.3);
  backdrop-filter: blur(5px);
  z-index: 100;
}

.intro-text {
  font-size: 28px;
  color: #2388F6;
  margin-bottom: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  opacity: 0.9;
}

.team-name {
  font-size: 72px;
  color: #ffffff;
  margin-bottom: 40px;
  font-weight: 700;
  text-shadow: 0 0 15px rgba(35, 136, 246, 0.7);
  line-height: 1.1;
  background: linear-gradient(to right, #2388F6, #6ecbf5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing-container {
  border-top: 1px solid rgba(35, 136, 246, 0.3);
  padding-top: 20px;
  min-height: 60px;
}

.typing-text {
  font-size: 25px;
  color: #66ccff;
  display: flex;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 30px;
  background-color: #2388F6;
  margin-left: 5px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 移动设备提示样式 */
.mobile-view {
  display: none;
  text-align: center;
  padding: 30px;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(10, 25, 47, 0.95);
  border-radius: 15px;
  border: 2px solid #ff6b6b;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 100;
}

.incompatible-message h2 {
  font-size: 32px;
  color: #ff6b6b;
  margin: 20px 0;
}

.incompatible-message p {
  font-size: 18px;
  color: #a0c4e4;
  line-height: 1.6;
  margin: 10px 0;
}

.warning-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  color: #ff6b6b;
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 25px;
  background: rgba(35, 136, 246, 0.3);
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid #2388F6;
}

.back-button:hover {
  background: rgba(35, 136, 246, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* === 响应式设计 === */
@media (max-width: 1024px) {
  .content-container {
    left: 55%;
    max-width: 90%;
  }
}

@media (max-width: 768px), (orientation: portrait) {
  .desktop-view {
    display: none;
  }
  
  .mobile-view {
    display: block;
    margin-top: 150px;
  }
}

@media (max-width: 480px) {
  .mobile-view {
    padding: 20px;
    margin: 20px;
  }
  
  .incompatible-message h2 {
    font-size: 24px;
  }
  
  .incompatible-message p {
    font-size: 16px;
  }
  
  .warning-icon {
    width: 60px;
    height: 60px;
  }
}

/* === 强制全屏覆盖 === */
html, body, #app, .theme-container, .page {
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background: transparent !important;
}

/* 确保没有滚动条 */
body {
  overflow: hidden !important;
}
</style>