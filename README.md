# VueDemo
Try to code with vue.js

	* v-for     循环


<li v-for="todo in todos ">
    {{todo.text}}
</li>
	* 
v-if 是否显示


<p v-if="seen">
    现在你看到我了
</p>
	* 
v-bind 响应式更新Html特性


<a v-bind:href="url">
    ...
</a>
	* 
v-on 监听DOM


<a v-on:click="doSomething">
    ...
</a>
	* 
v-bind 缩写



<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
	* 
v-on 缩写


<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>



大部分的功能性操作都可以使用 function和 compute完成 但是有一些异步的东西需要使用watch完成


