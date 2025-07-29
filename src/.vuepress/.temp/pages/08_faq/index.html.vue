<template><div><h1 id="_8-常见问题-faq" tabindex="-1"><a class="header-anchor" href="#_8-常见问题-faq"><span>8. 常见问题（FAQ）</span></a></h1>
<p>本章汇总了用户在使用SecRandom过程中最常见的问题及解决方案。如果您遇到的问题未在此处列出，请查看<RouteLink to="/08_faq/10_troubleshooting/">故障排除</RouteLink>章节或联系技术支持。</p>
<h2 id="_8-1-安装与启动问题" tabindex="-1"><a class="header-anchor" href="#_8-1-安装与启动问题"><span>8.1 安装与启动问题</span></a></h2>
<h3 id="q-软件无法启动-没有任何反应怎么办" tabindex="-1"><a class="header-anchor" href="#q-软件无法启动-没有任何反应怎么办"><span>Q: 软件无法启动，没有任何反应怎么办？</span></a></h3>
<p>A: 请按照以下步骤排查：</p>
<ol>
<li><strong>检查系统 requirements</strong>：确认您的操作系统符合最低要求（Windows 10/11 64位、macOS 10.15+或Linux内核5.4+）</li>
<li><strong>Python环境验证</strong>（源码版）：打开终端执行<code v-pre>python --version</code>，确认Python 3.8-3.11已正确安装</li>
<li><strong>依赖检查</strong>（源码版）：在项目目录执行<code v-pre>pip list</code>，确保所有requirements.txt中的依赖已安装</li>
<li><strong>权限问题</strong>：尝试以管理员/root权限运行软件</li>
<li><strong>日志诊断</strong>：查看软件目录下的<code v-pre>logs/startup.log</code>文件，检查是否有错误信息</li>
<li><strong>重新安装</strong>：卸载后删除残留配置文件（通常在<code v-pre>~/.secrandom</code>或<code v-pre>C:\Users\用户名\AppData\Roaming\SecRandom</code>），然后重新安装</li>
</ol>
<h3 id="q-启动时报错-缺少xxx-dll-或-无法找到依赖库" tabindex="-1"><a class="header-anchor" href="#q-启动时报错-缺少xxx-dll-或-无法找到依赖库"><span>Q: 启动时报错&quot;缺少XXX.dll&quot;或&quot;无法找到依赖库&quot;？</span></a></h3>
<p>A: 这通常是系统缺少必要的运行时组件：</p>
<ul>
<li><strong>Windows</strong>：安装<a href="https://aka.ms/vs/16/release/vc_redist.x64.exe" target="_blank" rel="noopener noreferrer">Microsoft Visual C++ Redistributable 2019</a>和<a href="https://dotnet.microsoft.com/download/dotnet-framework/net48" target="_blank" rel="noopener noreferrer">.NET Framework 4.8</a></li>
<li><strong>macOS</strong>：安装<a href="https://developer.apple.com/xcode/features/" target="_blank" rel="noopener noreferrer">Xcode命令行工具</a>：<code v-pre>xcode-select --install</code></li>
<li><strong>Linux</strong>：根据发行版安装相应依赖，如Ubuntu/Debian：<code v-pre>sudo apt-get install libgtk-3-0 libappindicator3-1 libwebkit2gtk-4.0-37</code></li>
</ul>
<h3 id="q-为什么我下载的可执行文件被杀毒软件报毒" tabindex="-1"><a class="header-anchor" href="#q-为什么我下载的可执行文件被杀毒软件报毒"><span>Q: 为什么我下载的可执行文件被杀毒软件报毒？</span></a></h3>
<p>A: 这是因为我们的软件是开源项目，数字签名证书成本较高，导致部分杀毒软件误报。解决方法：</p>
<ol>
<li>在杀毒软件中将SecRandom添加到信任列表</li>
<li>从官方GitHub仓库下载源码自行编译</li>
<li>提交误报样本给杀毒软件厂商（我们已通过Virustotal验证主流杀毒软件兼容性）</li>
</ol>
<h2 id="_8-2-数据与文件管理" tabindex="-1"><a class="header-anchor" href="#_8-2-数据与文件管理"><span>8.2 数据与文件管理</span></a></h2>
<h3 id="q-如何安全迁移数据到新设备" tabindex="-1"><a class="header-anchor" href="#q-如何安全迁移数据到新设备"><span>Q: 如何安全迁移数据到新设备？</span></a></h3>
<p>A: 推荐使用官方数据迁移工具，确保数据完整性：</p>
<ol>
<li><strong>在旧设备上</strong>：
<ul>
<li>打开SecRandom，进入「设置」→「数据管理」→「导出数据」</li>
<li>选择要导出的内容（名单、历史记录、设置等）</li>
<li>设置密码保护（可选但推荐）并导出为<code v-pre>.secbak</code>文件</li>
</ul>
</li>
<li><strong>传输文件</strong>：通过U盘、云存储或直接传输将<code v-pre>.secbak</code>文件发送到新设备</li>
<li><strong>在新设备上</strong>：
<ul>
<li>安装并启动SecRandom（确保版本与旧设备相同或更新）</li>
<li>进入「设置」→「数据管理」→「导入数据」</li>
<li>选择<code v-pre>.secbak</code>文件并输入密码（如有）</li>
<li>等待导入完成并重启软件</li>
</ul>
</li>
</ol>
<blockquote>
<p><strong>注意</strong>：不建议直接复制配置文件夹，可能导致数据损坏或版本不兼容问题。</p>
</blockquote>
<h3 id="q-名单导入失败或格式错误如何解决" tabindex="-1"><a class="header-anchor" href="#q-名单导入失败或格式错误如何解决"><span>Q: 名单导入失败或格式错误如何解决？</span></a></h3>
<p>A: 名单导入支持多种格式，但需遵循特定规范：</p>
<h4 id="支持的格式及要求" tabindex="-1"><a class="header-anchor" href="#支持的格式及要求"><span>支持的格式及要求：</span></a></h4>
<ul>
<li><strong>纯文本(.txt)</strong>：UTF-8编码，每行一个条目，不包含空行</li>
<li><strong>CSV文件(.csv)</strong>：第一行为表头（如&quot;姓名,部门,权重&quot;），后续行为数据</li>
<li><strong>Excel文件(.xlsx)</strong>：仅支持单个工作表，第一行为表头</li>
<li><strong>JSON文件(.json)</strong>：需符合特定格式<code v-pre>{&quot;items&quot;: [&quot;条目1&quot;, &quot;条目2&quot;, ...]}</code>或<code v-pre>{&quot;items&quot;: [{&quot;name&quot;: &quot;条目1&quot;, &quot;weight&quot;: 10}, ...]}</code></li>
</ul>
<h4 id="常见错误及解决" tabindex="-1"><a class="header-anchor" href="#常见错误及解决"><span>常见错误及解决：</span></a></h4>
<ul>
<li><strong>编码错误</strong>：使用记事本或VS Code将文件另存为UTF-8编码</li>
<li><strong>格式错误</strong>：下载<a href="https://github.com/SECTL/SecRandom/raw/main/templates/name_list_template.xlsx" target="_blank" rel="noopener noreferrer">官方模板文件</a>并严格按照模板填写</li>
<li><strong>特殊字符</strong>：移除条目中的制表符、换行符等控制字符</li>
<li><strong>过大文件</strong>：超过10万条目的文件建议分批次导入</li>
</ul>
<h3 id="q-软件突然丢失了所有数据-如何恢复" tabindex="-1"><a class="header-anchor" href="#q-软件突然丢失了所有数据-如何恢复"><span>Q: 软件突然丢失了所有数据，如何恢复？</span></a></h3>
<p>A: SecRandom有多层数据保护机制，您可以尝试以下恢复方法：</p>
<ol>
<li><strong>自动备份恢复</strong>：
<ul>
<li>进入「设置」→「数据管理」→「备份与恢复」</li>
<li>查看「自动备份历史」，选择最近的备份点点击「恢复」</li>
</ul>
</li>
<li><strong>手动备份恢复</strong>：
<ul>
<li>软件默认每天凌晨2点创建自动备份，文件位于：
<ul>
<li>Windows: <code v-pre>C:\Users\用户名\AppData\Roaming\SecRandom\backups\</code></li>
<li>macOS: <code v-pre>~/Library/Application Support/SecRandom/backups/</code></li>
<li>Linux: <code v-pre>~/.config/SecRandom/backups/</code></li>
</ul>
</li>
<li>找到最新的<code v-pre>.secbak</code>文件，使用「导入数据」功能恢复</li>
</ul>
</li>
<li><strong>数据文件修复</strong>：
<ul>
<li>如数据库文件损坏，可尝试「设置」→「高级」→「修复数据库」功能</li>
</ul>
</li>
<li><strong>技术支持</strong>：
<ul>
<li>如以上方法失败，请收集<code v-pre>logs/error.log</code>文件并联系support@secrandom.org</li>
</ul>
</li>
</ol>
<h2 id="_8-3-功能使用问题" tabindex="-1"><a class="header-anchor" href="#_8-3-功能使用问题"><span>8.3 功能使用问题</span></a></h2>
<h3 id="q-如何设置不同人员的抽取概率" tabindex="-1"><a class="header-anchor" href="#q-如何设置不同人员的抽取概率"><span>Q: 如何设置不同人员的抽取概率？</span></a></h3>
<p>A: SecRandom提供多种概率设置方式，满足不同场景需求：</p>
<h4 id="基础概率设置" tabindex="-1"><a class="header-anchor" href="#基础概率设置"><span>基础概率设置：</span></a></h4>
<ol>
<li>在「抽人」模块点击「概率设置」按钮</li>
<li>选择概率模式：
<ul>
<li><strong>均等概率</strong>：所有人员被抽中的机会完全相同</li>
<li><strong>权重概率</strong>：为每个人设置0-1000的权重值（值越高概率越大）</li>
<li><strong>排除模式</strong>：可临时排除特定人员</li>
</ul>
</li>
<li>点击「应用」保存设置</li>
</ol>
<h4 id="高级概率设置" tabindex="-1"><a class="header-anchor" href="#高级概率设置"><span>高级概率设置：</span></a></h4>
<ul>
<li><strong>条件概率</strong>：在「高级设置」中，可设置如&quot;某人被抽中后，接下来3次不被抽中&quot;等规则</li>
<li><strong>导入概率配置</strong>：使用JSON/CSV文件导入复杂概率模型（详见<RouteLink to="/08_faq/07_advanced_features/#_71-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A6%82%E7%8E%87%E7%B3%BB%E7%BB%9F">高级功能</RouteLink>章节）</li>
<li><strong>随机种子</strong>：如需复现某次随机结果，可固定随机种子值</li>
</ul>
<h3 id="q-能否实现定时自动抽取并发送结果" tabindex="-1"><a class="header-anchor" href="#q-能否实现定时自动抽取并发送结果"><span>Q: 能否实现定时自动抽取并发送结果？</span></a></h3>
<p>A: 可以通过「自动化任务」功能实现：</p>
<ol>
<li>进入「高级」→「自动化任务」→「新建任务」</li>
<li>设置任务名称和触发条件：
<ul>
<li><strong>定时触发</strong>：选择日期、时间和重复频率</li>
<li><strong>事件触发</strong>：如&quot;名单更新时&quot;、&quot;软件启动时&quot;</li>
</ul>
</li>
<li>选择任务类型为「自动抽取」</li>
<li>配置抽取参数：
<ul>
<li>选择目标名单</li>
<li>设置抽取人数和概率规则</li>
<li>选择结果处理方式（保存到历史、发送邮件、生成报表等）</li>
</ul>
</li>
<li>设置通知方式（可选）：
<ul>
<li>软件通知</li>
<li>邮件通知</li>
<li>系统弹窗</li>
</ul>
</li>
<li>保存并启用任务</li>
</ol>
<blockquote>
<p><strong>注意</strong>：软件需保持运行状态才能执行定时任务，或启用「后台服务模式」（高级设置中）</p>
</blockquote>
<h3 id="q-如何自定义界面布局和主题" tabindex="-1"><a class="header-anchor" href="#q-如何自定义界面布局和主题"><span>Q: 如何自定义界面布局和主题？</span></a></h3>
<p>A: SecRandom支持高度个性化的界面定制：</p>
<h4 id="主题设置" tabindex="-1"><a class="header-anchor" href="#主题设置"><span>主题设置：</span></a></h4>
<ol>
<li>进入「设置」→「外观」→「主题」</li>
<li>选择预设主题（明亮、暗黑、护眼、高对比度等）</li>
<li>或点击「自定义主题」调整：
<ul>
<li>主色调、辅助色、强调色</li>
<li>字体样式和大小</li>
<li>窗口透明度</li>
<li>圆角半径</li>
</ul>
</li>
</ol>
<h4 id="布局调整" tabindex="-1"><a class="header-anchor" href="#布局调整"><span>布局调整：</span></a></h4>
<ol>
<li>在主界面点击右上角「自定义布局」按钮</li>
<li>拖动各功能模块到理想位置</li>
<li>点击模块右上角图标可：
<ul>
<li>折叠/展开模块</li>
<li>调整模块大小</li>
<li>设置模块显示内容</li>
</ul>
</li>
<li>点击「保存布局」，可创建多个布局方案并一键切换</li>
</ol>
<h2 id="_8-4-性能与兼容性" tabindex="-1"><a class="header-anchor" href="#_8-4-性能与兼容性"><span>8.4 性能与兼容性</span></a></h2>
<h3 id="q-软件运行卡顿或反应缓慢怎么办" tabindex="-1"><a class="header-anchor" href="#q-软件运行卡顿或反应缓慢怎么办"><span>Q: 软件运行卡顿或反应缓慢怎么办？</span></a></h3>
<p>A: 性能问题通常可通过以下方法解决：</p>
<h4 id="基础优化" tabindex="-1"><a class="header-anchor" href="#基础优化"><span>基础优化：</span></a></h4>
<ol>
<li><strong>清理缓存</strong>：「设置」→「高级」→「系统优化」→「清理缓存」</li>
<li><strong>减少数据量</strong>：归档或删除超过1年的历史记录</li>
<li><strong>关闭不必要功能</strong>：在「插件中心」禁用不使用的插件</li>
<li><strong>重启软件</strong>：部分功能异常仅需简单重启即可解决</li>
</ol>
<h4 id="高级优化" tabindex="-1"><a class="header-anchor" href="#高级优化"><span>高级优化：</span></a></h4>
<ul>
<li><strong>调整硬件加速</strong>：「设置」→「高级」→「性能」→ 尝试开启/关闭硬件加速</li>
<li><strong>内存优化</strong>：对于名单超过10万条的用户，可调整「内存使用限制」（建议不超过系统内存的50%）</li>
<li><strong>数据库优化</strong>：「设置」→「高级」→「数据库维护」→「优化数据库」</li>
</ul>
<h4 id="系统要求检查" tabindex="-1"><a class="header-anchor" href="#系统要求检查"><span>系统要求检查：</span></a></h4>
<p>确保您的设备满足推荐配置：</p>
<ul>
<li>CPU：双核2.0GHz以上</li>
<li>内存：至少4GB RAM（大规模数据建议8GB+）</li>
<li>硬盘：至少100MB可用空间（不包括数据存储）</li>
</ul>
<h3 id="q-软件支持在虚拟机或远程桌面环境中运行吗" tabindex="-1"><a class="header-anchor" href="#q-软件支持在虚拟机或远程桌面环境中运行吗"><span>Q: 软件支持在虚拟机或远程桌面环境中运行吗？</span></a></h3>
<p>A: 支持，但需注意以下事项：</p>
<ul>
<li><strong>虚拟机</strong>：需启用3D加速和足够的显存（至少128MB）</li>
<li><strong>远程桌面</strong>：
<ul>
<li>Windows远程桌面：可能需要禁用硬件加速</li>
<li>VNC/RDP客户端：推荐使用RealVNC或Microsoft Remote Desktop以获得最佳性能</li>
</ul>
</li>
<li><strong>云端服务器</strong>：如AWS EC2、阿里云等，需安装图形界面和相关依赖库</li>
<li><strong>性能影响</strong>：通过远程方式运行时，动画效果可能会卡顿，建议在设置中关闭「高级动画」</li>
</ul>
<h2 id="_8-5-安全与隐私" tabindex="-1"><a class="header-anchor" href="#_8-5-安全与隐私"><span>8.5 安全与隐私</span></a></h2>
<h3 id="q-软件如何保护我的敏感数据" tabindex="-1"><a class="header-anchor" href="#q-软件如何保护我的敏感数据"><span>Q: 软件如何保护我的敏感数据？</span></a></h3>
<p>A: SecRandom采用多层次安全架构保护您的数据：</p>
<h4 id="数据存储安全" tabindex="-1"><a class="header-anchor" href="#数据存储安全"><span>数据存储安全：</span></a></h4>
<ul>
<li>本地数据库采用AES-256加密存储</li>
<li>敏感信息（如密码）使用PBKDF2哈希算法处理</li>
<li>自动备份文件默认加密</li>
</ul>
<h4 id="访问控制" tabindex="-1"><a class="header-anchor" href="#访问控制"><span>访问控制：</span></a></h4>
<ul>
<li>支持应用锁功能（密码/PIN/生物识别）</li>
<li>分级权限管理（管理员/普通用户模式）</li>
<li>操作日志记录所有敏感操作</li>
</ul>
<h4 id="隐私保护" tabindex="-1"><a class="header-anchor" href="#隐私保护"><span>隐私保护：</span></a></h4>
<ul>
<li>完全离线运行，不收集任何用户数据</li>
<li>可选的匿名使用模式（隐藏所有个人标识信息）</li>
<li>数据导出时可选择脱敏模式</li>
</ul>
<h3 id="q-忘记应用锁密码怎么办" tabindex="-1"><a class="header-anchor" href="#q-忘记应用锁密码怎么办"><span>Q: 忘记应用锁密码怎么办？</span></a></h3>
<p>A: 如您设置了密码提示，可通过提示找回。如未设置或提示无效：</p>
<ol>
<li><strong>通过邮箱找回</strong>（仅当已配置）：
<ul>
<li>在解锁界面点击「忘记密码」</li>
<li>输入绑定的邮箱地址</li>
<li>接收重置链接并设置新密码</li>
</ul>
</li>
<li><strong>安全模式重置</strong>：
<ul>
<li>关闭软件，按住Shift键的同时重新启动</li>
<li>选择「安全模式启动」</li>
<li>在安全模式设置中重置应用锁</li>
</ul>
</li>
<li><strong>数据保留重置</strong>：
<ul>
<li>删除配置文件<code v-pre>config.json</code>（位于数据目录）</li>
<li>此操作会保留数据但重置所有设置</li>
</ul>
</li>
</ol>
<blockquote>
<p><strong>警告</strong>：请勿尝试暴力破解，连续失败5次后软件将自动锁定30分钟。</p>
</blockquote>
<h2 id="_8-6-高级功能与定制" tabindex="-1"><a class="header-anchor" href="#_8-6-高级功能与定制"><span>8.6 高级功能与定制</span></a></h2>
<h3 id="q-如何开发和使用自定义插件" tabindex="-1"><a class="header-anchor" href="#q-如何开发和使用自定义插件"><span>Q: 如何开发和使用自定义插件？</span></a></h3>
<p>A: 开发SecRandom插件需遵循以下步骤：</p>
<ol>
<li><strong>准备开发环境</strong>：
<ul>
<li>安装Python 3.8+和Git</li>
<li>克隆插件开发模板：<code v-pre>git clone https://github.com/SECTL/SecRandom-plugin-template.git</code></li>
<li>安装开发依赖：<code v-pre>pip install -r requirements-dev.txt</code></li>
</ul>
</li>
<li><strong>开发插件</strong>：
<ul>
<li>修改模板中的<code v-pre>main.py</code>实现功能</li>
<li>添加必要的UI元素（如需要）</li>
<li>编写插件元数据和配置文件</li>
</ul>
</li>
<li><strong>测试插件</strong>：
<ul>
<li>在开发环境中运行<code v-pre>test_plugin.py</code>进行本地测试</li>
<li>使用「插件中心」→「开发模式」加载测试插件</li>
</ul>
</li>
<li><strong>打包发布</strong>：
<ul>
<li>执行<code v-pre>package.py</code>生成<code v-pre>.secplugin</code>文件</li>
<li>提交到官方插件商店或分享给其他用户</li>
</ul>
</li>
</ol>
<p>详细开发文档和API参考请访问：<a href="https://docs.secrandom.org/development/plugins" target="_blank" rel="noopener noreferrer">SecRandom插件开发指南</a></p>
<h3 id="q-能否将抽取结果自动同步到其他系统" tabindex="-1"><a class="header-anchor" href="#q-能否将抽取结果自动同步到其他系统"><span>Q: 能否将抽取结果自动同步到其他系统？</span></a></h3>
<p>A: 可以通过以下几种方式实现系统集成：</p>
<h4 id="api集成" tabindex="-1"><a class="header-anchor" href="#api集成"><span>API集成：</span></a></h4>
<ol>
<li>启用「高级」→「开发者选项」→「API服务」</li>
<li>生成API密钥并配置访问权限</li>
<li>使用以下API端点同步数据：
<ul>
<li><code v-pre>GET /api/v1/history</code> - 获取历史记录</li>
<li><code v-pre>POST /api/v1/draw</code> - 触发抽取操作</li>
<li><code v-pre>PUT /api/v1/results</code> - 推送自定义结果</li>
</ul>
</li>
</ol>
<h4 id="第三方集成" tabindex="-1"><a class="header-anchor" href="#第三方集成"><span>第三方集成：</span></a></h4>
<ul>
<li><strong>办公软件</strong>：通过插件支持导出到Excel/Google Sheets</li>
<li><strong>消息系统</strong>：支持钉钉、企业微信、Slack等消息推送</li>
<li><strong>数据库</strong>：可配置自动同步到MySQL/PPostgreSQL数据库</li>
<li><strong>Webhook</strong>：自定义Webhook通知，支持JSON/XML格式</li>
</ul>
<p>具体集成教程和代码示例可参考<a href="https://docs.secrandom.org/integration" target="_blank" rel="noopener noreferrer">集成文档</a></p>
</div></template>


