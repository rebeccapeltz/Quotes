import Vue from 'vue'
import Router from 'vue-router'
import QuoteofDay from '@/components/QuoteofDay'
import SearchQuote from '@/components/SearchQuote'

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