<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                    <input type='button' v-on:click='dosth()' value='addOutside'>
                    <div v-html="categoryView()" @test-click1="testFunction1"></div>
                    <!-- <my-component></my-component> -->
                    <bottomcontent @test-click="testFunction"></bottomcontent>


                    
                    <component :is="compiledData" ></component>
                    <button v-on:click="replace">Click Me to replace div contents</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var htmlstr = "<div class=\"bottomcontent\"><div class=\"moreresults\" @click=\"$emit('test-click')\">More Results</div></div>";
    var bottomcontent = {
        template: htmlstr+" " ,
        data: function () {
            return {
                homepage: {
                    numberofdivs: 60
                },
                message : 123
            }
        },
        methods: {
            appendcontent: function () {
                console.log('Called method!');
                this.homepage.numberofdivs += 60
            }
        }
    }

    export default {
        data () {
            return {
              data: ``
            }
          },
        components : {
            'bottomcontent' : bottomcontent
        },
        mounted() {
            console.log('Component mounted.');
            bottomcontent.message = "abc";
        },
        render: function (createElement) {
            return "abcdefghi";
        },
        methods : {
            addthis : function(str){
                alert("addthis");
            },
            categoryView : function(){
                var str = "";
                str = str+"<input type='button' value='add111' onclick='alert(\"ei\")' >";
                return str;
            },
            dosth : function(){
                alert("abc");
                htmlstr = "abc";
                bottomcontent.template = "abc";
                //this.$emit.click();
            },
            testFunction : function(){
                alert("test");
            },
            testFunction1 : function(){

            },
            showcatdiv : function() {
                this.catdivdata = `Now click on me <a href='#' @click.prevent='alert("yo")'> here </a>`
            },
            hithere : function(str){
                alert(str);
            },  
            replace () {
               this.data = `Now click on me <a href='#' @click.prevent='alertt("yo")'> here </a>`
            }          
        },
        computed: {
            compiledData () {
              return {
                template: `<p>${this.data} kl;</p>`,
                methods : {
                    alertt(dd){
                        alert("ei");
                    }
                }
              }
            }
          }
    }
</script>
