import { shallowMount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/books/Form.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

// NOTE: I'm missing a lot of test branches here with this component but
// since this is a simple coding challenge I didn't add full coverage.
// If it were a production application I would strive to have 100% test coverage,
// using mocking for my http client / axios, data models, stubbing for lifecycle events
// and methods etc.

describe('Form', () => {
    let wrapper;
    let router;
    let localVue;

    beforeEach(() => {
        // given
        localVue = createLocalVue()
        localVue.use(VueRouter)
        localVue.use(Vuelidate)
        router = new VueRouter()
    })

    it('form component properly renders', () => {
        // when
        wrapper = shallowMount(Form, {
            localVue,
            router
        })

        expect(wrapper.is(Form)).toBe(true)
    })

    it('form has all elements needed to construct a book model', () => {
        // when
        wrapper = shallowMount(Form, {
            localVue,
            router
        })

        expect(wrapper.contains('input[name=title]')).toBe(true);
        expect(wrapper.contains('input[name=description]')).toBe(true);
        expect(wrapper.contains('input[name=publication_date]')).toBe(true);
        expect(wrapper.contains('input[name=author_first_name]')).toBe(true);
        expect(wrapper.contains('input[name=author_last_name]')).toBe(true);
    })
})