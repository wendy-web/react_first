first react 学习；
运行项目
npm run start


开发：
安装插件：ES7+ React/Redux/React-Native snippets
新建文件输入rcc快捷键创建

生命周期的节点
React时期的版本的节点： 16.2 16.8 17；
fiber的使用

生命周期-----
挂载阶段：
componentWillUnmount： 将要挂载
render：渲染，访问this.prop/state，
componentDiMount： dom渲染完成

运行阶段：
UNSAFE_componentWillReceiveProps：最先获取父组件更改的属性的值
shouldComponentUpdate: 返回false会阻止render的调用；可用于性能的提升
componenWillUpdate：将要更新
render：重新渲染
componentDidUpdate：更新渲染完dom，可操纵dom

销毁阶段：
