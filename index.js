var app = new Vue({
    el:'#app',
    data:{
        seen: true
    }
})
var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于' + new Date().toLocaleDateString()
    }
})

var app3 = new Vue({
    el:"#app-3",
    data:{
        todos:[
            { text: '学习 Javascript'},
            { text: '学习 Vue '},
            { text: '整个牛项目'}
        ]
    }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        message: 'Hello Vue.js!'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app5 = new Vue({
    el:"#app-5",
    data:{
        message: 'Hello Vue'
    }
})

// Vue.component('todo-item', {
//     template: '<li>This is a todo</li>'
//   })

var app6 = new Vue({
    el: '#app-6'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text}}</li>'
  })

var app7 = new Vue({
    el: "#app-7",
    data:{
        groceryList:[
            { id:0,text:'蔬菜'},
            { id:1,text:'奶酪'},
            { id:2,text:'你大爷'},
            { id:3,text:'依旧是你大爷'}
        ]  
    }
})

var app8 = new Vue({
    el: "#app-8",
    data:{
        message: 'Hello'
    },
    computed:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        } 
    }
})

var app9 = new Vue({
    el: "#app-9",   
    data:{
        firstName: 'Foo',
        lastName: 'Trol'
    },           
    // computed:{
    //     fullName: function(){
    //         return this.firstName + ' ' + this.lastName
    //     } 
    // }
    computed:{
             fullName:{
                 get: function () {
                     return this.firstName + '  ' + this.lastName
                 },
                 set: function(newValue){
                     var names = newValue.split('')
                     this.firstName = names[0]
                     this.lastName = names[names.length -1]
                 }
             }}          
})

var app10 = new Vue({
    el: "#app-10",
    data:{
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch:{
        question: function (newQuestion,oldQuestion){
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
            
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
      },
    methods: {
        getAnswer: function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        }
    }
})

var app11 = new Vue({
    el:"#app-11",
    data:{
        isActive: false,
        error: null
    },
    computed:{
        classObject: function(){
            return{
                active:this.isActive && !this.error,
                'text-danger':this.error && this.error.type === 'fatal'
            }
        }
    }
})
