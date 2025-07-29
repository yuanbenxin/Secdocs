<template><div><h1 id="_2-下载与运行" tabindex="-1"><a class="header-anchor" href="#_2-下载与运行"><span>2. 下载与运行</span></a></h1>
<h2 id="_2-1-系统要求" tabindex="-1"><a class="header-anchor" href="#_2-1-系统要求"><span>2.1 系统要求</span></a></h2>
<p>在下载和运行SecRandom之前，请确保您的设备满足以下最低系统要求：</p>
<h3 id="_2-1-1-硬件要求" tabindex="-1"><a class="header-anchor" href="#_2-1-1-硬件要求"><span>2.1.1 硬件要求</span></a></h3>
<ul>
<li><strong>处理器</strong>：1GHz或更快的处理器</li>
<li><strong>内存</strong>：至少512MB RAM</li>
<li><strong>存储空间</strong>：至少100MB可用空间</li>
<li><strong>显示器</strong>：最低分辨率1024×768</li>
</ul>
<h3 id="_2-1-2-软件要求" tabindex="-1"><a class="header-anchor" href="#_2-1-2-软件要求"><span>2.1.2 软件要求</span></a></h3>
<ul>
<li><strong>Windows系统</strong>：Windows 7/8/10/11（32位或64位）</li>
<li><strong>macOS系统</strong>：macOS 10.13或更高版本</li>
<li><strong>Linux系统</strong>：Ubuntu 18.04/Debian 10或兼容发行版</li>
<li><strong>Python环境</strong>（源码运行）：Python 3.8及以上版本，已安装pip包管理器</li>
</ul>
<h2 id="_2-2-下载方式" tabindex="-1"><a class="header-anchor" href="#_2-2-下载方式"><span>2.2 下载方式</span></a></h2>
<p>SecRandom提供多种下载渠道，您可以根据需求选择最适合的方式：</p>
<h3 id="_2-2-1-官方github仓库-推荐" tabindex="-1"><a class="header-anchor" href="#_2-2-1-官方github仓库-推荐"><span>2.2.1 官方GitHub仓库（推荐）</span></a></h3>
<ol>
<li>访问官方仓库：<a href="https://github.com/SECTL/SecRandom" target="_blank" rel="noopener noreferrer">SECTL/SecRandom</a></li>
<li>点击右上角的「Code」按钮，选择「Download ZIP」</li>
<li>或使用Git命令克隆仓库：<code v-pre>git clone https://github.com/SECTL/SecRandom.git</code></li>
</ol>
<h3 id="_2-2-2-发布页面下载" tabindex="-1"><a class="header-anchor" href="#_2-2-2-发布页面下载"><span>2.2.2 发布页面下载</span></a></h3>
<ol>
<li>进入GitHub仓库的「Releases」页面</li>
<li>根据您的操作系统选择相应的发布版本</li>
<li>下载以下任意一种格式的文件：
<ul>
<li>源码包：<code v-pre>SecRandom-vX.X.X-src.zip</code>（适用于开发人员）</li>
<li>Windows可执行文件：<code v-pre>SecRandom-vX.X.X-windows.zip</code></li>
<li>macOS应用程序：<code v-pre>SecRandom-vX.X.X-macos.dmg</code></li>
<li>Linux可执行文件：<code v-pre>SecRandom-vX.X.X-linux.tar.gz</code></li>
</ul>
</li>
</ol>
<h3 id="_2-2-3-镜像站点下载" tabindex="-1"><a class="header-anchor" href="#_2-2-3-镜像站点下载"><span>2.2.3 镜像站点下载</span></a></h3>
<p>对于网络访问GitHub困难的用户，可通过以下镜像站点获取：</p>
<ul>
<li>Gitee镜像：<a href="https://gitee.com/SECTL/SecRandom" target="_blank" rel="noopener noreferrer">SECTL/SecRandom</a></li>
<li>国内开源社区：<a href="https://www.oschina.net/p/secrandom" target="_blank" rel="noopener noreferrer">OSChina</a></li>
</ul>
<h3 id="_2-2-4-版本选择建议" tabindex="-1"><a class="header-anchor" href="#_2-2-4-版本选择建议"><span>2.2.4 版本选择建议</span></a></h3>
<ul>
<li><strong>稳定版</strong>：带有「Latest Stable」标记的版本，适合大多数用户</li>
<li><strong>测试版</strong>：带有「Pre-release」标记的版本，包含最新功能但可能不稳定</li>
<li><strong>长期支持版</strong>：带有「LTS」标记的版本，更新频率低但维护周期长</li>
</ul>
<h2 id="_2-3-文件验证" tabindex="-1"><a class="header-anchor" href="#_2-3-文件验证"><span>2.3 文件验证</span></a></h2>
<p>为确保下载文件的完整性和安全性，建议进行文件验证：</p>
<h3 id="_2-3-1-校验文件哈希值" tabindex="-1"><a class="header-anchor" href="#_2-3-1-校验文件哈希值"><span>2.3.1 校验文件哈希值</span></a></h3>
<ol>
<li>在发布页面找到对应版本的SHA256校验值</li>
<li>在本地计算下载文件的哈希值：
<ul>
<li>Windows：在PowerShell中运行<code v-pre>Get-FileHash -Algorithm SHA256 &quot;文件路径&quot;</code></li>
<li>macOS/Linux：在终端中运行<code v-pre>sha256sum &quot;文件路径&quot;</code></li>
</ul>
</li>
<li>比较计算结果与发布页面提供的校验值是否一致</li>
</ol>
<h2 id="_2-4-运行步骤" tabindex="-1"><a class="header-anchor" href="#_2-4-运行步骤"><span>2.4 运行步骤</span></a></h2>
<p>根据您下载的文件类型，选择以下相应的运行方式：</p>
<h3 id="_2-4-1-源码运行-适用于开发人员和高级用户" tabindex="-1"><a class="header-anchor" href="#_2-4-1-源码运行-适用于开发人员和高级用户"><span>2.4.1 源码运行（适用于开发人员和高级用户）</span></a></h3>
<h4 id="windows系统" tabindex="-1"><a class="header-anchor" href="#windows系统"><span>Windows系统</span></a></h4>
<ol>
<li>确保已安装Python 3.8+和Git</li>
<li>打开命令提示符或PowerShell</li>
<li>克隆仓库：<code v-pre>git clone https://github.com/SECTL/SecRandom.git</code></li>
<li>进入项目目录：<code v-pre>cd SecRandom</code></li>
<li>创建虚拟环境（可选但推荐）：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>python -m venv venv</span></span>
<span class="line"><span>.\venv\Scripts\activate</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>安装依赖：<code v-pre>pip install -r requirements.txt</code>
<blockquote>
<p>若出现网络问题，可使用国内镜像：<code v-pre>pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple</code></p>
</blockquote>
</li>
<li>启动程序：<code v-pre>python main.py</code></li>
</ol>
<h4 id="macos-linux系统" tabindex="-1"><a class="header-anchor" href="#macos-linux系统"><span>macOS/Linux系统</span></a></h4>
<ol>
<li>确保已安装Python 3.8+、Git和相关依赖：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Ubuntu/Debian</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python3-pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python3-venv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># macOS（使用Homebrew）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> python</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> git</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>打开终端</li>
<li>克隆仓库：<code v-pre>git clone https://github.com/SECTL/SecRandom.git</code></li>
<li>进入项目目录：<code v-pre>cd SecRandom</code></li>
<li>创建并激活虚拟环境（可选但推荐）：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">python3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> venv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> venv</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">source</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> venv/bin/activate</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>安装依赖：<code v-pre>pip3 install -r requirements.txt</code></li>
<li>启动程序：<code v-pre>python3 main.py</code></li>
</ol>
<h3 id="_2-4-2-可执行文件运行-适用于普通用户" tabindex="-1"><a class="header-anchor" href="#_2-4-2-可执行文件运行-适用于普通用户"><span>2.4.2 可执行文件运行（适用于普通用户）</span></a></h3>
<h4 id="windows系统-1" tabindex="-1"><a class="header-anchor" href="#windows系统-1"><span>Windows系统</span></a></h4>
<ol>
<li>下载Windows版本的ZIP压缩包</li>
<li>右键点击压缩包，选择「提取全部」，指定解压路径</li>
<li>进入解压后的文件夹，找到<code v-pre>SecRandom.exe</code>文件</li>
<li>双击运行程序（首次运行可能会有Windows Defender SmartScreen提示）：
<ul>
<li>点击「更多信息」</li>
<li>点击「仍要运行」</li>
</ul>
</li>
<li>（可选）创建桌面快捷方式：右键<code v-pre>SecRandom.exe</code>，选择「发送到」→「桌面快捷方式」</li>
</ol>
<h4 id="macos系统" tabindex="-1"><a class="header-anchor" href="#macos系统"><span>macOS系统</span></a></h4>
<ol>
<li>下载macOS版本的DMG文件</li>
<li>双击DMG文件，将出现一个包含<code v-pre>SecRandom.app</code>的窗口</li>
<li>将<code v-pre>SecRandom.app</code>拖到「应用程序」文件夹</li>
<li>从启动台或应用程序文件夹中打开SecRandom</li>
<li>首次运行可能会提示「无法打开，因为它来自身份不明的开发者」：
<ul>
<li>进入「系统偏好设置」→「安全性与隐私」</li>
<li>点击「仍要打开」</li>
</ul>
</li>
</ol>
<h4 id="linux系统" tabindex="-1"><a class="header-anchor" href="#linux系统"><span>Linux系统</span></a></h4>
<ol>
<li>下载Linux版本的tar.gz文件</li>
<li>打开终端，导航到下载目录</li>
<li>解压文件：<code v-pre>tar -zxvf SecRandom-vX.X.X-linux.tar.gz</code></li>
<li>进入解压目录：<code v-pre>cd SecRandom-vX.X.X-linux</code></li>
<li>赋予可执行权限：<code v-pre>chmod +x SecRandom</code></li>
<li>运行程序：<code v-pre>./SecRandom</code></li>
<li>（可选）创建桌面启动器：<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> SecRandom.desktop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/share/applications/</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_2-5-首次运行设置" tabindex="-1"><a class="header-anchor" href="#_2-5-首次运行设置"><span>2.5 首次运行设置</span></a></h2>
<p>首次启动SecRandom后，您需要完成以下初始设置：</p>
<ol>
<li><strong>语言选择</strong>：从下拉菜单中选择您偏好的界面语言</li>
<li><strong>隐私协议</strong>：阅读并勾选「我已阅读并同意隐私政策」</li>
<li><strong>数据存储位置</strong>：选择数据存储路径（默认：用户文档/SecRandom）</li>
<li><strong>更新设置</strong>：选择更新检查频率（每日/每周/每月/从不）</li>
<li>点击「完成设置」进入主界面</li>
</ol>
<h2 id="_2-6-常见运行问题解决" tabindex="-1"><a class="header-anchor" href="#_2-6-常见运行问题解决"><span>2.6 常见运行问题解决</span></a></h2>
<h3 id="_2-6-1-python环境相关问题" tabindex="-1"><a class="header-anchor" href="#_2-6-1-python环境相关问题"><span>2.6.1 Python环境相关问题</span></a></h3>
<h4 id="问题-python命令未找到" tabindex="-1"><a class="header-anchor" href="#问题-python命令未找到"><span>问题：<code v-pre>python</code>命令未找到</span></a></h4>
<p><strong>解决方法</strong>：</p>
<ul>
<li>确认已安装Python并添加到系统PATH</li>
<li>Windows用户可尝试使用<code v-pre>py</code>命令代替<code v-pre>python</code></li>
<li>macOS/Linux用户可尝试使用<code v-pre>python3</code>命令</li>
</ul>
<h4 id="问题-依赖安装失败-如no-module-named-xxx" tabindex="-1"><a class="header-anchor" href="#问题-依赖安装失败-如no-module-named-xxx"><span>问题：依赖安装失败（如<code v-pre>No module named xxx</code>）</span></a></h4>
<p><strong>解决方法</strong>：</p>
<ul>
<li>更新pip：<code v-pre>pip install --upgrade pip</code></li>
<li>安装缺失的依赖：<code v-pre>pip install 缺失的模块名</code></li>
<li>对于系统特定依赖，参考项目README中的系统依赖说明</li>
</ul>
<h3 id="_2-6-2-可执行文件相关问题" tabindex="-1"><a class="header-anchor" href="#_2-6-2-可执行文件相关问题"><span>2.6.2 可执行文件相关问题</span></a></h3>
<h4 id="问题-windows系统提示「无法打开此文件」或「缺少xxx-dll」" tabindex="-1"><a class="header-anchor" href="#问题-windows系统提示「无法打开此文件」或「缺少xxx-dll」"><span>问题：Windows系统提示「无法打开此文件」或「缺少XXX.dll」</span></a></h4>
<p><strong>解决方法</strong>：</p>
<ul>
<li>安装Microsoft Visual C++运行库：<a href="https://support.microsoft.com/zh-cn/help/2977003/the-latest-supported-visual-c-downloads" target="_blank" rel="noopener noreferrer">下载链接</a></li>
<li>确保解压到完整路径，避免中文或特殊字符</li>
<li>尝试以管理员身份运行</li>
</ul>
<h4 id="问题-linux系统提示「权限被拒绝」" tabindex="-1"><a class="header-anchor" href="#问题-linux系统提示「权限被拒绝」"><span>问题：Linux系统提示「权限被拒绝」</span></a></h4>
<p><strong>解决方法</strong>：</p>
<ul>
<li>赋予可执行权限：<code v-pre>chmod +x SecRandom</code></li>
<li>检查文件系统是否挂载为只读：<code v-pre>mount | grep $(pwd)</code></li>
</ul>
<h3 id="_2-6-3-图形界面相关问题" tabindex="-1"><a class="header-anchor" href="#_2-6-3-图形界面相关问题"><span>2.6.3 图形界面相关问题</span></a></h3>
<h4 id="问题-程序启动后无窗口显示" tabindex="-1"><a class="header-anchor" href="#问题-程序启动后无窗口显示"><span>问题：程序启动后无窗口显示</span></a></h4>
<p><strong>解决方法</strong>：</p>
<ul>
<li>检查屏幕分辨率是否满足最低要求</li>
<li>尝试删除配置文件重置设置：<code v-pre>~/.config/SecRandom/config.ini</code></li>
<li>以窗口模式启动：<code v-pre>python main.py --windowed</code></li>
</ul>
<h4 id="问题-界面显示异常或乱码" tabindex="-1"><a class="header-anchor" href="#问题-界面显示异常或乱码"><span>问题：界面显示异常或乱码</span></a></h4>
<p><strong>解决方法</strong>：</p>
<ul>
<li>更新显卡驱动</li>
<li>调整系统显示缩放比例为100%</li>
<li>删除字体缓存：<code v-pre>rm -rf ~/.cache/SecRandom/fontcache</code></li>
</ul>
<h2 id="_2-7-运行后验证" tabindex="-1"><a class="header-anchor" href="#_2-7-运行后验证"><span>2.7 运行后验证</span></a></h2>
<p>成功启动SecRandom后，请确认以下几点以确保程序正常运行：</p>
<ol>
<li><strong>主界面完整性</strong>：检查是否显示所有功能按钮（抽人、抽奖、设置等）</li>
<li><strong>资源加载</strong>：确认界面图标、背景等资源显示正常</li>
<li><strong>基本功能测试</strong>：点击各按钮，确认能正常切换界面</li>
<li><strong>版本信息</strong>：进入「关于」页面，确认版本号与下载版本一致</li>
</ol>
<p>如果您遇到任何未在此处列出的问题，请访问<a href="https://github.com/SECTL/SecRandom/issues" target="_blank" rel="noopener noreferrer">问题反馈页面</a>提交详细描述。</p>
</div></template>


