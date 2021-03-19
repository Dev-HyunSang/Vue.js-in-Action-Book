var APP_LOG_LIFECYCLE_EVENTS = true;

var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "Vue.js 애완용품샵"
    },
    beforeCreate: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeCreate');
        }
    },
    created: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('created');
        }
    },
    beforeMount: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeMount');
        }
    },
    mounted: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('mounted');
        }
    },
    beforeUpdate: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeUpdate');
        }
    },
    updated: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('updated');
        }
    },
    beforeDestory: function() {
        if(APP_LOG_LIFECYCLE_EVENTS) {
            console.log('beforeDestory');
        }
    },
    destoryed: function() {
        if(APP_LOG_LIFECYCLE_EVENTS){ 
            console.log("destoryed");
        }
    }
})