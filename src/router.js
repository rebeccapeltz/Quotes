import Vue from 'vue'
import Router from 'vue-router'
import QuoteofDay from '@/QuoteofDay'
import SearchQuote from '@/SearchQuote'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path: '/',
            name: 'quoteofday',
            compnent: QuoteofDay
        },
        {
            path: '/SearchQuote',
            name: 'searchQuote',
            compnent: SearchQuote
        }
    ]
})