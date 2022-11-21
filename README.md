<!--
 * @Author: wendy 463710868@qq.com
 * @Date: 2022-11-15 13:21:02
 * @LastEditors: wendy 463710868@qq.com
 * @LastEditTime: 2022-11-22 01:35:26
 * @FilePath: /react_first_wendy/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# first react 学习

运行项目
npm run start

开发：
安装插件：ES7+ React/Redux/React-Native snippets
新建文件输入rcc快捷键创建

生命周期的节点
React时期的版本的节点： 16.2 16.8 17；
fiber的使用

## 生命周期

#### 挂载阶段

componentWillUnmount： 将要挂载
render：渲染，访问this.prop/state，
componentDiMount： dom渲染完成

#### 运行阶段

UNSAFE_componentWillReceiveProps：最先获取父组件更改的属性的值
shouldComponentUpdate: 返回false会阻止render的调用；可用于性能的提升
componenWillUpdate：将要更新
render：重新渲染
componentDidUpdate：更新渲染完dom，可操纵dom

#### 销毁阶段

componentWillUnmonent：在组件的销毁之前进行清理，如：计时器和事件监听

## 新生命周期

- getDerivedStateFromProps：在数据的初始化与state的数据更新中调用
- getSnapshotBeforeUpdate：获取更新之前的数据，比render相对较晚；return返回记录的数据；在componentDidUpdate中获取
- PureComponent的优化；组件有个可直接代替使用

### 书写组件的安装

- npm i swiper

### React Hooks

函数式组件拥有自己的状态

#### useState的使用

### useEffect的使用

- useEffect 依赖[]; 模拟componentDidMount(),只执行一次
- useEffect 依赖[a,b]；模拟componentDidUpdate(),首次执行+更新执行；相当于vue的监听
- useEffect return一个函数的调用；模拟componentWillUnMount；销毁时进行计时器与全局变量的清除

### useEffect与useLayoutEffect的区别

useEffect是dom完全渲染完成的时候执行，可能会出现页面抖动的情况；（推荐使用）
useLayoutEffect是生成dom的时机，可在此修改dom，避免渲染完后再一次的修改，引起再次重绘/回流的损耗；（非必要不使用）

### useCallback（记忆函数）

防止因为组件重新渲染，导致方法被重新创建，起到缓存的作用，只有第二个参数变化了，错重新声明一次

### useMemo(记忆组件)：计算属性（componente）

### useRef:引用值的使用

### 自定义hook，进行逻辑的抽离
