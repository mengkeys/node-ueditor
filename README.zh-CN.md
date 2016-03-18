# Node-UEditor **【非官方作品】**

## 模块声明 
### [UEditor](http://ueditor.baidu.com)编辑器是一款有[百度](https://www.baidu.com)公司Fex团队开发的一个富文本编辑器，有着很丰富的功能，深受国内开发者的喜爱，但官方却没有发布Node.js版本的SDK包，这让很多Noder不能很愉快的使用UEditor,所以本人开发了这个模块，希望能让Node.js开发者也能用上高大上的百度UEditor富文本编辑器。
### 后台SDK涉及一般的图片，文件，视频等资源的上传，列表获取等接口，其余属于前端开发内容，与此模块无关，若要了解更多关于UEditor的信息，请访问[UEditor官方网站]获取更多信息。
### 本模块非官方模块，只是基于个人项目需求而开发，因本人水平有限，对模块要求也不高，能用就行，所以不免存在一些问题，欢迎使用者提出宝贵的意见，在使用本模块过程中若由于模块问题给您带来烦恼，深表歉意。

## 模块使用

### 1. 安装

```
npm install node-ueditor --save 
```
或者

```
cnpm install node-ueditor --save
```

### 2. ueditor编辑器配置

#### 模块根目录下提供的config.default.json配置文件，开发者可根据项目实际情况拷贝到自己的配置文件目录进行定制修改，模块默认读取此配置文件


### 3. 使用

```
var UE = require('node-ueditor');
var ue = new UE({});  // 初始化模块
```

### 4.示例

#### 1) 

```Node.js
const http = require('http');

const server = http.createServer(function(req, res){
    var path = req.path;
    var method = req.method;
    
    if(method == 'GET'){
        switch('
    }
});

server.listen(3000, function(){
    console.log('Server listen on port 3000.');
});
```