import { shallowMount, createLocalVue } from '@vue/test-utils'
import Card from '@/components/books/Card.vue'
import VueRouter from 'vue-router'

describe('Card.vue', () => {
    it('renders a book card containing book data', () => {
        // given
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        const book = {
            id: 1,
            title: 'A TEST BOOK',
            publication_date: '01-01-1991',
            description: 'A TEST DESCRIPTION',
            author: {
                first_name: 'Jim',
                last_name: 'Bob'
            }
        }

        const index = 1;

        // when
        const wrapper = shallowMount(Card, {
            localVue,
            router,
            propsData: { book, index }
        })

        // then
        expect(wrapper.text()).toMatch('A TEST BOOK')
        expect(wrapper.text()).toMatch('01-01-1991')
        expect(wrapper.text()).toMatch('A TEST DESCRIPTION')
        expect(wrapper.text()).toMatch('Jim')
        expect(wrapper.text()).toMatch('Bob')
    })
})
